function loadPage(event) {
  event.preventDefault();

  const link = event.currentTarget.getAttribute("data-link");
  fetch(link)
    .then((response) => response.text())
    .then((html) => {
      const contentElement = document.querySelector("[am-Content]");
      contentElement.innerHTML = html;

      const scripts = contentElement.getElementsByTagName("script");
      for (let script of scripts) {
        executeScript(script);
      }
    })
    .catch((error) => {
      console.warn("Something went wrong:", error);
    });
}

const loadedScripts = [];
function executeScript(script) {
  const scriptSrc = script.getAttribute("src");

  if (scriptSrc) {
    if (loadedScripts.indexOf(scriptSrc) > -1) {
      return;
    } else {
      loadedScripts.push(scriptSrc); // Add the script's "src" attribute to the array
    }
  }

  const newScript = document.createElement("script");
  newScript.text = script.innerHTML;

  for (let attribute of script.attributes) {
    newScript.setAttribute(attribute.name, attribute.value);
  }

  script.parentNode.replaceChild(newScript, script);
}

// async function preloadPages() {
//   const menuItems = document.querySelectorAll("[am-MenuText]");
//   for (let item of menuItems) {
//     const link = item.getAttribute("data-link");
//     if (link === null)
//       continue;
//     const pageContent = await loadPageContent(link);
//     const pageContainer = createPageContainer(link, pageContent);
//     insertContainerToContentArea(pageContainer);
//   }
// }

// async function loadPageContent(link) {
//   const response = await fetch(link);
//   return await response.text();
// }

// function createPageContainer(link, pageContent) {
//   const pageContainer = document.createElement("div");
//   pageContainer.classList.add("page-container", "hidden");
//   pageContainer.setAttribute("data-link", link);
//   pageContainer.innerHTML = pageContent;
//   return pageContainer;
// }

// function insertContainerToContentArea(container) {
//   const contentElement = document.querySelector("[am-Content]");
//   contentElement.appendChild(container);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   preloadPages();
// });

// function switchPage(event) {
//   event.preventDefault();
//   const link = event.currentTarget.getAttribute("data-link");
//   setActivePage(link);
// }

// function setActivePage(link) {
//   const pageContainers = document.querySelectorAll(".page-container");
//   for (let container of pageContainers) {
//     if (container.getAttribute("data-link") === link) {
//       container.classList.remove("hidden");
//       container.classList.add("visible");
//     } else {
//       container.classList.add("hidden");
//       container.classList.remove("visible");
//     }
//   }
// }