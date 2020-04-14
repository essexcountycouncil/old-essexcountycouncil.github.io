import React from "react"
export default () => (

<section class="search-background" aria-label="Search essex.gov.uk" >
  <div class="overlay"></div>
  <div class="search-container">
    <div class="greeting">
      <h1 class="page-heading">Home page title</h1>
    </div>
    <form action="/search" method="get" class="form" role="search" aria-label="Search essex.gov.uk">
      <div class="group search">
        <div class="search-input">
          <label for="cludo-search-hero-form">Search essex.gov.uk
            <input type="text" id="cludo-search-hero-form" name="search" placeholder="Search essex.gov.uk" autocomplete="off" />
          </label>
          <button class="fas fa-search search-icon-position" aria-label="Search button"></button>
        </div>
      </div>
    </form>
  </div>
</section>
)