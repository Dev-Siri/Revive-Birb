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

  if (modalHeaderText?.textContent)
    modalHeaderText.textContent = modalHeaderText.textContent?.replace(
      "Post",
      "Tweet"
    );
  if (promotionInfoHeading)
    promotionInfoHeading.textContent = "Promote your Tweet";
  if (promotionInfoButtonText)
    promotionInfoButtonText.textContent = "Promote this Tweet";
  if (promotionInfoParagraph)
    promotionInfoParagraph.textContent =
      "Get more impressions and grow your brand. Promote this Tweet and broaden your reach.";
}
