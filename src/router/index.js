/*
 * @Author: your name
 * @Date: 2021-05-15 16:04:48
 * @LastEditTime: 2021-05-15 22:24:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import addressSelect from "@/components/addressSelect";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/addressSelect",
      name: "addressSelect",
      component: addressSelect
    }
  ]
});
