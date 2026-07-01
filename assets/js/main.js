document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Theme Toggle ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  function setTheme(theme) {
    if (theme === "dark") {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("color-scheme", "dark");
      if (themeToggleBtn) themeToggleBtn.innerHTML = 'Theme: Dark';
    } else if (theme === "light") {
      htmlElement.setAttribute("data-theme", "light");
      localStorage.setItem("color-scheme", "light");
      if (themeToggleBtn) themeToggleBtn.innerHTML = 'Theme: Light';
    } else {
      htmlElement.removeAttribute("data-theme");
      localStorage.removeItem("color-scheme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = systemDark ? 'Theme: Dark (Auto)' : 'Theme: Light (Auto)';
      }
    }
  }

  const savedTheme = localStorage.getItem("color-scheme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = systemDark ? 'Theme: Dark (Auto)' : 'Theme: Light (Auto)';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      if (currentTheme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  if (menuToggle && navbarMenu) {
    const closeMenu = () => {
      navbarMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = navbarMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navbarMenu.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!navbarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("color-scheme")) {
      const themeToggleBtnInner = document.getElementById("theme-toggle");
      if (themeToggleBtnInner) {
        themeToggleBtnInner.innerHTML = e.matches ? 'Theme: Dark (Auto)' : 'Theme: Light (Auto)';
      }
    }
  });

  // --- 2. Copy Code Button ---
  const codeBlocks = document.querySelectorAll('div.highlight, pre:not(div.highlight pre)');
  codeBlocks.forEach(block => {
    block.style.position = 'relative';
    
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'COPY';
    
    block.appendChild(button);
    
    button.addEventListener('click', () => {
      const codeEl = block.querySelector('code') || block;
      let text = '';
      
      if (codeEl.tagName.toLowerCase() === 'code') {
        text = codeEl.innerText;
      } else {
        text = Array.from(block.childNodes)
          .filter(node => node !== button)
          .map(node => node.textContent)
          .join('');
      }
      
      navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'COPIED';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = 'COPY';
          button.classList.remove('copied');
        }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });

  // --- 3. Table of Contents Generator and Highlight ---
  const tocList = document.getElementById("toc-list");
  const proseContent = document.querySelector(".prose");

  if (tocList && proseContent) {
    const headings = Array.from(proseContent.querySelectorAll("h2, h3"));

    if (headings.length === 0) {
      const tocContainer = document.getElementById("toc-container");
      if (tocContainer) tocContainer.style.display = "none";
      return;
    }

    function slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = slugify(heading.textContent);
      }

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", `#${heading.id}`);
      a.textContent = heading.textContent;
      
      if (heading.tagName.toLowerCase() === "h3") {
        a.classList.add("toc-h3");
      }

      li.appendChild(a);
      tocList.appendChild(li);
    });

    const tocLinks = tocList.querySelectorAll("a");

    function updateActiveSection() {
      const scrollPosition = window.scrollY + 120; // offset for navbar
      let activeHeading = null;

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        if (heading.offsetTop <= scrollPosition) {
          activeHeading = heading;
        } else {
          break;
        }
      }

      if (!activeHeading && headings.length > 0) {
        activeHeading = headings[0];
      }

      tocLinks.forEach((link) => {
        link.classList.remove("active");
        if (activeHeading && link.getAttribute("href") === `#${activeHeading.id}`) {
          link.classList.add("active");
        }
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
  }
});
