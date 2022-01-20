module.exports = {
  "Menu visible test": function (browser) {
    var home_page = browser.page.home_page();

    home_page
      .navigate()
      .waitForElementVisible("@home_tab")
      .assert.visible("@home_tab")
      .click("@home_tab")
      .assert.urlEquals(home_page.url)
      .assert.visible("@about_tab")
      .click("@about_tab")
      .assert.urlEquals(home_page.url + "about-me/")
      .assert.visible("@blog_tab")
      .click("@blog_tab")
      .assert.urlEquals(home_page.url + "blog/")
      .assert.visible("@travel_tab")
      .click("@travel_tab")
      .assert.urlEquals(home_page.url + "destinations/")
      .assert.visible("@contact_tab")
      .click("@contact_tab")
      .assert.urlEquals(home_page.url + "contact/")
      .assert.visible("@photos_tab")
      .click("@photos_tab");

    browser
      .windowHandles(function (result) {
        var handle = result.value[1];
        browser.switchWindow(handle);
      })
      .assert.urlEquals("https://shotsofwander.com/")
      .end();
  },
  // "Map visible test": function (browser) {
  //   var home_page = browser.page.home_page();

  //   home_page
  //     .navigate()
  //     .waitForElementVisible("@map_block")
  //     .assert.visible("@map_block")
  //     .click("@easter_island_marker")
  //     .assert.visible("@easter_island_text")
  //     .assert.containsText("@easter_island_text", "Easter Island, Rapa Nui")
  //     .end();
  // },
};
