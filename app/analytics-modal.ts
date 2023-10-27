export default function analyticsModal() {
  const modalHeaderText = document.querySelector("#modal-header > span");
  const promotionInfoHeading = document.querySelector(
    "div[data-testid=promotionInfoWrapper] > div > ul > li > div > div > span"
  );
  const promotionInfoParagraph = document.querySelector(
    "div[data-testid=promotionInfoWrapper] > div > ul > li > div > div:nth-child(2) > span"
  );
  const promotionInfoButtonText = document.querySelector(
    "div[data-testid=promotionInfoWrapper] > div:nth-child(2) > a > div > span > span"
  );

  if (modalHeaderText) modalHeaderText.textContent = "Tweet Analytics";
  if (promotionInfoHeading)
    promotionInfoHeading.textContent = "Promote your tweet";
  if (promotionInfoButtonText)
    promotionInfoButtonText.textContent = "Promote this tweet";
  if (promotionInfoParagraph)
    promotionInfoParagraph.textContent =
      "Get more impressions and grow your brand. Promote this tweet and broaden your reach.";
}
