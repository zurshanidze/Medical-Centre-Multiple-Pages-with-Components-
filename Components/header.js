const headerTemplate = document.createElement("template")

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="../style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

    <header id="header" class="header">

        <nav id="navbar" class="navbar">

            <div class="navbar-capsules" id="navbar-capsules">
                <div id="capsule-wrapper1" class="capsule-wrapper">
                    <div class="capsule-left"></div>
                    <div class="capsule-right"></div>
                    <div id="capsule1" class="capsule"></div>
                    <div class="capsule-nav"><a href="../index.html">Home</a></div>
                </div>
                <div id="capsule-wrapper1" class="capsule-wrapper">
                    <div class="capsule-left"></div>
                    <div class="capsule-right"></div>
                    <div id="capsule1" class="capsule"></div>
                    <div class="capsule-nav"><a href="../about.html">About</a></div>
                </div>
                <div id="capsule-wrapper2" class="capsule-wrapper">
                    <div class="capsule-left"></div>
                    <div class="capsule-right"></div>
                    <div id="capsule2" class="capsule"></div>
                    <div class="capsule-nav"><a href="../services.html">Services</a></div>
                </div>
                <div id="capsule-wrapper3" class="capsule-wrapper">
                    <div class="capsule-left"></div>
                    <div class="capsule-right"></div>
                    <div id="capsule3" class="capsule"></div>
                    <div class="capsule-nav"><a href="../medical-Tecnology.html">medical Tecnology</a></div>
                </div>
                <div id="capsule-wrapper4" class="capsule-wrapper">
                    <div class="capsule-left"></div>
                    <div class="capsule-right"></div>
                    <div id="capsule4" class="capsule"></div>
                    <div class="capsule-nav"><a href="../Supplements.html">Supplements</a></div>
                </div>
            </div>

            <div class="navbar-contact">
                <div id="contact" class="contact">
                    <a href="../contact.html" id="contact-a" class="contact-a">Contact</a>
                    <i id="gear-icon" class="fa-5x fa-solid fa-gear"></i>
                </div>
            </div>
        </nav>

    </header>
`;




class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);