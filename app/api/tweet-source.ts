import { TWITTER_API_AUTH_TOKEN } from "../env";
import { getCookie } from "../utils/cookies";

export default async function getTweetSource(tweetId: string): Promise<string> {
  const csrfToken = getCookie("ct0");

  const urlBase =
    "https://twitter.com/i/api/graphql/zJvfJs3gSbrVhC0MKjt_OQ/TweetDetail";
  const query = `?variables={"focalTweetId":"${tweetId}","referrer":"home","controller_data":"DAACDAABDAABCgABCEAABEoCAAEKAAKAQAAAAAEBAAoACW6ei3WtrtOeCAALAAAABA8ADAMAAAAQAQACSgQAQAgAAQEAAABAgAoAEDHty/9MMBA1AAAAAA==","with_rux_injections":false,"includePromotedContent":true,"withCommunity":true,"withQuickPromoteEligibilityTweetFields":true,"withBirdwatchNotes":true,"withSuperFollowsUserFields":true,"withDownvotePerspective":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":true,"withVoice":true,"withV2Timeline":true}&features={"rweb_tipjar_consumption_enabled":true,"responsive_web_graphql_exclude_directive_enabled":true,"verified_phone_label_enabled":false,"creator_subscriptions_tweet_preview_api_enabled":true,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"communities_web_enable_tweet_community_results_fetch":true,"c9s_tweet_anatomy_moderator_badge_enabled":true,"articles_preview_enabled":true,"tweetypie_unmention_optimization_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"responsive_web_twitter_article_tweet_consumption_enabled":true,"tweet_awards_web_tipping_enabled":false,"creator_subscriptions_quote_tweet_preview_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,"tweet_with_visibility_results_prefer_gql_media_interstitial_enabled":true,"rweb_video_timestamps_enabled":true,"longform_notetweets_rich_text_read_enabled":true,"longform_notetweets_inline_media_enabled":true,"responsive_web_enhance_cards_enabled":false}`;

  const response = await fetch(`${urlBase}${encodeURI(query)}`, {
    headers: {
      Authorization: `Bearer ${TWITTER_API_AUTH_TOKEN}`,
      "X-CSRF-Token": csrfToken,
    },
    credentials: "include",
  });

  const data = await response.json();

  return (
    data?.data?.threaded_conversation_with_injections_v2?.instructions?.[0]
      .entries?.[0]?.content?.itemContent?.tweet_results?.result?.source ?? ""
  );
}
