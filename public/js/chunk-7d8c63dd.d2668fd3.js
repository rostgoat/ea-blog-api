(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d8c63dd"],{"94c5":function(t,e,a){"use strict";var s=a("b6ed"),r=a.n(s);r.a},b6ed:function(t,e,a){},fc96:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mt-5 view-post",attrs:{outlined:""}},[a("v-container",{staticClass:"view-post__content"},[a("v-card-title",{staticClass:"view-post__title"},[a("h2",[t._v(" "+t._s(t.post.title)+" ")])]),a("v-card-subtitle",{staticClass:"view-post__subtitle"},[a("h4",[t._v(" "+t._s(t.post.sub_title)+" ")])]),a("div",{staticClass:"view-post__details-container"},[a("div",{staticClass:"view-post__details-container--created-by"},[t._v(" "+t._s(t.postAuthor)+" ")]),a("div",{staticClass:"view-post__details-container--created-date"},[t._v(" "+t._s(t.postDate)+" ")])]),a("div",{staticClass:"view-post__img-container"},[a("v-img",{staticClass:"pa-2 posts-list-item__img",attrs:{id:"photo",src:t.imageSource,"aspect-ratio":"2.4",width:"500",contain:""}})],1),a("div",{staticClass:"view-post__description"},t._l(t.paragraphs,(function(e){return a("div",{key:e},[a("div",{staticClass:"view-post__paragraph"},[t._v(" "+t._s(e)+" ")])])})),0)],1)],1)},r=[],n=(a("caad"),a("b0c0"),a("2532"),a("2909")),i=(a("96cf"),a("1da1")),o=a("d4ec"),c=a("bee2"),u=a("99de"),p=a("7e84"),h=a("262e"),d=a("9ab4"),l=a("60a3"),v=a("f7d6"),_=a("c1df"),f=a.n(_),b=a("ce65"),g=a("3653"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.post={},t.postUID="",t.postDate="",t.postAuthor="",t.imageSource="",t.paragraphs=[],t}return Object(h["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.postUID=this.$route.params.id,t.next=3,this.getPostData(this.postUID);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPostData",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["c"])({uid:e});case 2:return this.post=t.sent,this.formatContentParagraphs(this.post),this.formatPostCreatedDate(this.post.created_at),this.postAuthor=this.post.user.name,t.next=8,this.getImageURL();case 8:this.imageSource=t.sent;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getImageURL",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$storageMixinGetSignedURL("gamebible",this.post.post_image_bucket_key);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"formatPostCreatedDate",value:function(t){this.postDate=f()(t).format("MMMM DD, YYYY")}},{key:"formatContentParagraphs",value:function(t){for(var e=this.post.content.length,a=0,s=500,r=s,i=Object(n["a"])(t.content),o=0;o<i.length;o++){if(o>=r&&i[o].includes(".")){var c=t.content.substring(a,o+1);this.paragraphs.push(c),a=o+1,r+=s}if(e-a<=500){var u=t.content.substring(a,e);this.paragraphs.push(u);break}}}}]),e}(Object(g["Mixins"])(b["a"]));m=Object(d["a"])([l["a"]],m);var w=m,C=w,k=(a("94c5"),a("2877")),j=a("6544"),O=a.n(j),y=a("b0af"),D=a("99d9"),x=a("a523"),R=a("adda"),I=Object(k["a"])(C,s,r,!1,null,null,null);e["default"]=I.exports;O()(I,{VCard:y["a"],VCardSubtitle:D["b"],VCardTitle:D["d"],VContainer:x["a"],VImg:R["a"]})}}]);
//# sourceMappingURL=chunk-7d8c63dd.d2668fd3.js.map