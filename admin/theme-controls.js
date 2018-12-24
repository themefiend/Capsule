var formData = {
  "items": [
    {
      "type": "TEXT",
      "helpText": "",
      "title": "License Key",
      "isRequired": true,
      "category": "dashboard"  
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Big Cartel Domain",
      "category": "dashboard"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Choose a Theme Preset",
      "category": "presets"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Choose a Preset",
      "hasOtherOption": false,
      "choices": [
        {"value": "Street", "image": "https://themefiend.com/wp-content/uploads/tfcreator/capsule-thumb.png"},
        {"value": "Fab", "image": "https://themefiend.com/wp-content/uploads/fab-thumb.png"},
        {"value": "Ruby", "image": "https://themefiend.com/wp-content/uploads/ruby-thumb.jpg"},
        {"value": "Legend", "image": "https://themefiend.com/wp-content/uploads/legend-thumb-1.jpg"}
      ],
      "category": "presets"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Body",
      "category": "appearance"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Body Font Size",
       "controlWidth": "col-md-4",
      "choices": [
        "Small",
        "Medium",
        "Large",
      ],
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "Enter the name of the <a href='https://fonts.google.com' target='_blank'>Google Font</a> you would like to use.",
      "title": "Body Font Family",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Accent Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Body Background Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Body Text Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Inline Link Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Headings",
      "category": "appearance"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Headings Font Size",
      "controlWidth": "col-md-4",
      "choices": [
        "Small",
        "Medium",
        "Large",
      ],
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "Enter the name of the <a href='https://fonts.google.com' target='_blank'>Google Font</a> you would like to use.",
      "title": "Headings Font Family",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Headings Text Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Heading Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Navigation",
      "controlWidth": "col-md-12",
      "category": "appearance"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Navigation Font Size",
      "controlWidth": "col-md-4",
      "choices": [
        "Small",
        "Medium",
        "Large",
      ],
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "Enter the name of the <a href='https://fonts.google.com' target='_blank'>Google Font</a> you would like to use.",
      "title": "Navigation Font Family",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Header Background Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Header Navigation Link Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Header Navigation Link Hover Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Top Header Bar Background Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Top Header Bar Link Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Footer Navigation Link Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Buttons",
      "category": "appearance"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Button Font Size",
      "controlWidth": "col-md-4",
      "choices": [
        "Small",
        "Medium",
        "Large",
      ],
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Primary Button Background Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Primary Button Text Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    /*{
      "type": "TEXT",
      "helpText": "",
      "title": "Secondary Button Background Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Secondary Button Text Color",
      "controlWidth": "col-md-4",
      "category": "appearance"
    },*/
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Images",
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Store Name",
      "controlWidth": "col-md-4",
      "category": "layout"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Logo Image URL",
      "controlWidth": "col-md-4",
      "category": "layout"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Favicon Image URL",
      "controlWidth": "col-md-4",
      "category": "layout"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Navigation",
      "category": "layout"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Header Navigation Overlay",
      "controlWidth": "col-md-4",
      "hasOtherOption": false,
      "choices": [
        "None",
        "Transparent",
        "Translucent"
      ],
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Header Promo Text",
      "controlWidth": "col-md-4",
      "category": "layout"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Navigation Style",
      "controlWidth": "col-md-12",
      "hasOtherOption": false,
      "choices": [
        {"value": "Standard Expanded", "image": "https://themefiend.com/wp-content/uploads/header-standard.png"},
        {"value": "Standard Expanded with Top Nav", "image": "https://themefiend.com/wp-content/uploads/header-standard-with-top-bar.png"},
        {"value": "Condensed Hamburger Menu", "image": "https://themefiend.com/wp-content/uploads/header-collapsed.png"},
        {"value": "Centered Menu", "image": "https://themefiend.com/wp-content/uploads/header-centered-e1537530030755.png"},
        {"value": "Centered Menu with Top Nav", "image": "https://themefiend.com/wp-content/uploads/header-centered-with-top-bar.png"}
      ],
      "category": "layout"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "Enter the URL of page links to move from header to footer (one per line)",
      "title": "Footer Links",
      "category": "layout"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "Enter the URL of page links that will be hidden from navigation (one per line)",
      "title": "Hidden Links",
      "category": "layout"
    },
   /* {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "External Links",
      "category": "layout"
    }, */
    {
      "type": "CHECKBOX",
      "helpText": "",
      "title": "Contact Link Location",
      "hasOtherOption": false,
      "choices": [
        "Header Navigation",
        "Footer Navigation"
      ],
      "category": "layout"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "Enter the URL of your social media profiles (one per line)",
      "title": "Social Media Links",
      "category": "layout"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Integrations",
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Mailing List Sign Up Heading",
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Mailing List Sign Up Info",
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "MailChimp Form Action URL",
      "category": "layout"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "Sign up for a free <a href='http://bit.ly/2o33VyG' target='_blank'>GetSiteControl account</a>. Enable subscribe popups, promo alerts and live chat widgets.",
      "title": "Enable GetSiteControl Widgets",
      "hasOtherOption": false,
      "choices": [
        "Yes",
        "No"
      ],
      "category": "layout"
    },
    {
      "type": "TEXT",
      "helpText": "Obtain your GetSiteControl ID from the browser address bar (ex. 151606)",
      "title": "GetSiteControl ID",
      "category": "layout"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Products",
      "category": "core-pages"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "Sign up for a free account at <a href='http://widgetpack.com' target='_blank'>WidgetPack.com</a> to allow customers to leave product reviews.",
      "title": "Enable Product Reviews",
      "hasOtherOption": false,
      "choices": [
        "Yes",
        "No"
      ],
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "Your Widget Pack ID can be found in the top left corner of your admin at <a href='http://widgetpack.com' target='_blank'>WidgetPack.com</a>.",
      "title": "Widget Pack ID (for Product Reviews)",
      "category": "core-pages"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Product Grid Columns",
      "controlWidth": "col-md-12",
      "choices": [
        {"value": "2", "image": "https://themefiend.com/wp-content/uploads/two-products-per-row.png"},
        {"value": "3", "image": "https://themefiend.com/wp-content/uploads/three-products-per-row.png"},
        {"value": "4", "image": "https://themefiend.com/wp-content/uploads/four-products-per-row.png"},
      ],
      "category": "core-pages"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Product Image Width",
      "controlWidth": "col-md-12",
      "choices": [
        {"value": "Small", "image": "https://themefiend.com/wp-content/uploads/product-image-small.png"},
        {"value": "Large", "image": "https://themefiend.com/wp-content/uploads/product-image-large.png"},
      ],
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "First Product Option Group Name",
      "category": "core-pages"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "First Option Group Style",
      "hasOtherOption": false,
      "choices": [
        "Buttons",
        "Dropdown"
      ],
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Second Product Option Group Name",
      "category": "core-pages"
    },
   /* {
      "type": "MULTIPLE_CHOICE",
      "helpText": "Note: 'Buttons' option temporarily not available. ",
      "title": "Second Option Group Style",
      "hasOtherOption": false,
      "choices": [
        "Buttons",
        "Dropdown"
      ],
      "category": "core-pages"
    }, */
    {
      "type": "TEXT",
      "helpText": "",
      "title": "'Add to Cart' Text",
      "category": "core-pages"
    },
   /* {
      "type": "TEXT",
      "helpText": "Note: This control is temporarily inactive. Will be available soon.",
      "title": "'Regular Price' Prefix Text",
      "category": "core-pages"
    }, */
    /*{
      "type": "TEXT",
      "helpText": "Note: This control is temporarily inactive. Will be available soon.",
      "title": "'Sale Price' Prefix Text",
      "category": "core-pages"
    }, */
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Shipping Tab Name",
      "category": "core-pages"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Shipping Tab Info",
      "category": "core-pages"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Cart",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "'Continue Shopping' Text",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "'Update Total' Text",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "'Checkout' Text",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Checkout Note",
      "category": "core-pages"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Contact Page",
      "category": "core-pages"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Contact Intro Text",
      "category": "core-pages"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Contact Address",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Contact Email",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Contact Phone Number",
      "category": "core-pages"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Customer Service Info",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Contact Success Heading",
      "category": "core-pages"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Contact Success Message",
      "category": "core-pages"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "'Featured Products' Text",
      "category": "home-page"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Hero",
      "category": "home-page"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Home Page Hero Style",
      "controlWidth": "col-md-12",
      "choices": [
        {"value": "Full-width Slider", "image": "https://themefiend.com/wp-content/uploads/home-hero-slider.png"},
        {"value": "Masonry Grid", "image": "https://themefiend.com/wp-content/uploads/home-hero-grid.png"}
      ],
      "category": "home-page"
    },
        {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Hero Image 1",
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Hero Image 1 Image URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 1 Link URL",
      "category": "home-page"
    },
    {
      "type": "LIST",
      "helpText": "",
      "title": "Hero Image 1 Text Alignment",
      "choices": [
        "Top Left",
        "Top Center",
        "Top Right",
        "Middle Left",
        "Middle Center",
        "Middle Right",
        "Bottom Left",
        "Bottom Center",
        "Bottom Right",
      ],
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 1 Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 1 Sub Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 1 Button Text",
      "category": "home-page"
    },
    {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Hero Image 2",
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Hero Image 2 Image URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 2 Link URL",
      "category": "home-page"
    },
    {
      "type": "LIST",
      "helpText": "",
      "title": "Hero Image 2 Text Alignment",
      "choices": [
        "Top Left",
        "Top Center",
        "Top Right",
        "Middle Left",
        "Middle Center",
        "Middle Right",
        "Bottom Left",
        "Bottom Center",
        "Bottom Right",
      ],
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 2 Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 2 Sub Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 2 Button Text",
      "category": "home-page"
    },
    {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Hero Image 3",
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Hero Image 3 Image URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 3 Link URL",
      "category": "home-page"
    },
    {
      "type": "LIST",
      "helpText": "",
      "title": "Hero Image 3 Text Alignment",
      "choices": [
        "Top Left",
        "Top Center",
        "Top Right",
        "Middle Left",
        "Middle Center",
        "Middle Right",
        "Bottom Left",
        "Bottom Center",
        "Bottom Right",
      ],
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 3 Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 3 Sub Heading Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Hero Image 3 Button Text",
      "category": "home-page"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Media Cards",
      "controlWidth": "col-md-12",
      "category": "home-page"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Media Card Style",
      "controlWidth": "col-md-12",
      "hasOtherOption": false,
      "choices": [
        {"value": "Alternating", "image": "https://themefiend.com/wp-content/uploads/alternating-media-cards-text.png"},
        {"value": "2 Column", "image": "https://themefiend.com/wp-content/uploads/two-media-cards-text-below.png"},
        {"value": "2 Column Overlay", "image": "https://themefiend.com/wp-content/uploads/two-media-cards-overlay.png"},
        {"value": "3 Column", "image": "https://themefiend.com/wp-content/uploads/three-media-cards-text-below.png"},
        {"value": "3 Column Overlay", "image": "https://themefiend.com/wp-content/uploads/three-media-cards-overlay.png"}
      ],
      "category": "home-page"
    },
    {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Media Card 1",
      "category": "home-page"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Media Card 1 Type",
      "hasOtherOption": false,
      "choices": [
        "Image",
        "Video"
      ],
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Media Card 1 Image",
      "category": "home-page"
    },
    {
      "type": "VIDEO_URL",
      "helpText": "",
      "title": "Media Card 1 Video",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 1 Link URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 1 Heading Text",
      "category": "home-page"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Media Card 1 Body Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 1 Button Text",
      "category": "home-page"
    },
    {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Media Card 2",
      "category": "home-page"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Media Card 2 Type",
      "hasOtherOption": false,
      "choices": [
        "Image",
        "Video"
      ],
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Media Card 2 Image",
      "category": "home-page"
    },
    {
      "type": "VIDEO_URL",
      "helpText": "",
      "title": "Media Card 2 Video",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 2 Link URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 2 Heading Text",
      "category": "home-page"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Media Card 2 Body Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 2 Button Text",
      "category": "home-page"
    },
    {
      "type": "SUB_SECTION",
      "helpText": "",
      "title": "Media Card 3",
      "category": "home-page"
    },
    {
      "type": "MULTIPLE_CHOICE",
      "helpText": "",
      "title": "Media Card 3 Type",
      "hasOtherOption": false,
      "choices": [
        "Image",
        "Video"
      ],
      "category": "home-page"
    },
    {
      "type": "FILE_UPLOAD",
      "helpText": "",
      "title": "Media Card 3 Image",
      "category": "home-page"
    },
    {
      "type": "VIDEO_URL",
      "helpText": "",
      "title": "Media Card 3 Video",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 3 Link URL",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 3 Heading Text",
      "category": "home-page"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "",
      "title": "Media Card 3 Body Text",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Media Card 3 Button Text",
      "category": "home-page"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Integrations",
      "category": "home-page"
    },
    {
      "type": "TEXT",
      "helpText": "",
      "title": "Instagram Section Heading",
      "category": "home-page"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "Generate Instagram embed code (iframe) through <a href='https://snapwidget.com' target='_blank'>Snapwidget</a> and paste in the field below.",
      "title": "Instagram Feed Embed Code",
      "category": "home-page"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Import / Export",
      "category": "extra-settings"
    },
    {
      "type": "EXPORT",
      "helpText": "Export your theme settings as a text file. Useful for saving settings before changing your license key.",
      "title": "Export",
       "controlWidth": "col-md-6",
      "category": "extra-settings"
    },
    {
      "type": "IMPORT",
      "helpText": "Copy and paste your exported theme settings into the textarea below and click the 'Import' button.",
      "title": "Import",
       "controlWidth": "col-md-6",
      "category": "extra-settings"
    },
    {
      "type": "SECTION_HEADER",
      "helpText": "",
      "title": "Custom Styles",
      "category": "extra-settings"
    },
    {
      "type": "PARAGRAPH_TEXT",
      "helpText": "Enter any custom CSS styles below",
      "title": "Custom CSS",
       "controlWidth": "col-md-12",
      "category": "extra-settings"
    },
  ]
}

