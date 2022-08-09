export default function waitForMenuDown(selector: string) {
  return new Promise((resolve) => {
    if (!document.querySelector(selector)) {
      return resolve(true);
    }

    const observer = new MutationObserver((mutations) => {
      if (!document.querySelector(selector)) {
        resolve(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
