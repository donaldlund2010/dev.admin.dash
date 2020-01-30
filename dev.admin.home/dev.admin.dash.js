var app1 = Vue.component("admDash", {
  props: ["title", "description", "class", "id","link", "label"],
  template: `

  <section 
  :class="'admDash' + ' relative' + ' w-80' + ' text-center' + ' shadow-lg' + ' rounded-lg' + ' bg-white' + ' inline-block' + ' m-8'"
  >

  <div class="admDash-header font-bold text-2xl border-b-2 border-black">
  {{ title }}
  </div>
  <div class="admDash-body">
  {{ description }}
    </div>
    <div class="admDash-footer">
    <button
    type="button"
    class="border-2 shadow-lg hover\:bg-white rounded-lg p-1 md\:min-w-0 text-center pointer text-2xl text-white hover\:text-black my-2 bg-green-400 strong bottom-0 m-5"
    @click="openWindow(link)"
    >
    {{ label }}
    </button>
      </div>
  </section></td>
  </tr>

  `,
  methods: {
    openWindow(link) {
      window.open(
        `${link}`
      );
    }
  }
});
var app1 = new Vue({
  el: "#app1",
  data() {
    return {
      sections: [{

          id: "1",
          title: "Intergration Portal",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://integrations.theworkforcegroup.org/access',
          label: "Portal"

        },
        {

          id: "2",
          title: "Yahoo",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://www.yahoo.com/',
          label: "Yahoo"

        },
        {

          id: "3",
          title: "Apple",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_405171666136_pgrid_13945964887_&cid=aos-us-kwgo-brand--slid---product-',
          label: "Apple"

        },
        {

          id: "4",
          title: "Quickbase",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://www.quickbase.com/',
          label: "Quickbase"

        },
        {

          id: "5",
          title: "WFGRP AWS",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://us-east-1.signin.aws.amazon.com',
          label: "AWS"


        },
        {

          id: "6",
          title: "Google",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          color: "black",
          link: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwip0YOfwprnAhVQvZ4KHQ8SAVUQPAgH',
          label: "Google"

        }

      ]

    };

    
  }

});