(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1166:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(419).configure)([__webpack_require__(1167)],module,!1)}).call(this,__webpack_require__(138)(module))},1167:function(module,exports,__webpack_require__){var map={"./BarChart/BarChart.stories.tsx":1180,"./Button/Button.stories.tsx":1181,"./PieChart/PieChart.stories.tsx":1182,"./Select/Select.stories.tsx":1183,"./Table/Table.stories.tsx":1184};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1167},1180:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BarChart",(function(){return BarChart_stories_BarChart}));var objectSpread2=__webpack_require__(45),react=__webpack_require__(2),esm=__webpack_require__(560),jsx_runtime=__webpack_require__(27),BarChart_BarChart=function BarChart(_ref){var chart,_ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,_ref$height=_ref.height,height=void 0===_ref$height?300:_ref$height,container=_ref.container,_ref$colors=_ref.colors,colors=void 0===_ref$colors?["#FFDD00","#D3D9DE"]:_ref$colors;return Object(react.useEffect)((function(){chart&&chart.changeData(data)}),[data]),Object(react.useEffect)((function(){chart&&chart.destroy(),(chart=new esm.a({container:container||"chart",height:height,autoFit:!0,width:615})).scale("value",{alias:"Количество",nice:!0}),chart.data(data),chart.axis("value",{title:{offset:30},tickLine:{style:{stroke:"#D3D9DE"}},line:{style:{stroke:"#D3D9DE"}},grid:{line:{type:"line",style:{lineDash:[2]}}}}),chart.interval().position("name*value").color("type",colors).adjust("stack").label("value",(function(val){return{position:"middle",offset:0,content:function content(originData){return originData.value>0?originData.value:""},style:{fill:"#5E7080"}}})),chart.legend({position:"bottom"}),chart.render()}),[]),Object(jsx_runtime.jsx)("div",{id:"chart"})};try{BarChart_BarChart.displayName="BarChart",BarChart_BarChart.__docgenInfo={description:"",displayName:"BarChart",props:{height:{defaultValue:{value:300},description:"",name:"height",required:!1,type:{name:"number"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"string"}},colors:{defaultValue:{value:'["#FFDD00", "#D3D9DE"]'},description:"",name:"colors",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BarChart/index.tsx#BarChart"]={docgenInfo:BarChart_BarChart.__docgenInfo,name:"BarChart",path:"src/components/BarChart/index.tsx#BarChart"})}catch(__react_docgen_typescript_loader_error){}var BarChartStory={title:"BarChart",component:BarChart_BarChart},BarChart_stories_data=[{id:11568,name:"Героев Труда ул., 39",city:"Усть-Илимск",organisation:"Почта России",plan_fact:0,plan_count:1,plan_date:"Февраль",exists:1,registered_operators:[],unregistered_operators:[1234,123456]},{id:1946,name:"50 лет ВЛКСМ ул., 16",city:"Усть-Илимск",organisation:"Почта России",plan_fact:0,plan_count:1,plan_date:"Февраль",exists:1,registered_operators:[],unregistered_operators:[123,1234,12345]}].reduce((function(acc,cur){return acc.push({name:cur.name,type:"Зарегистрированные",value:cur.registered_operators.length}),acc.push({name:cur.name,type:"Незарегистрированные",value:cur.unregistered_operators.length}),acc}),[]),BarChart_stories_BarChart=function BarChart(){return Object(jsx_runtime.jsx)(BarChart_BarChart,{colors:["#26ADE4","#D3D9DE"],data:BarChart_stories_data,height:300})};__webpack_exports__.default=BarChartStory;BarChart_stories_BarChart.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Chart colors={['#26ADE4', '#D3D9DE']} data={data} height={300} />"}},BarChart_stories_BarChart.parameters)},1181:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Button_stories_Basic})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Button_stories_Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Button_stories_Large})),__webpack_require__.d(__webpack_exports__,"FullWidth",(function(){return Button_stories_FullWidth}));var objectSpread2=__webpack_require__(45),classnames=(__webpack_require__(2),__webpack_require__(273)),classnames_default=__webpack_require__.n(classnames),Button_module=__webpack_require__(209),Button_module_default=__webpack_require__.n(Button_module),jsx_runtime=__webpack_require__(27),Button_Button=function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"sm":_ref$size,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,onClick=_ref.onClick,children=_ref.children;return Object(jsx_runtime.jsx)("button",{className:classnames_default()(Button_module_default.a.root,Button_module_default.a[type],Button_module_default.a[size],fullWidth&&Button_module_default.a.fullWidth),onClick:onClick,children:children})};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:'"primary" | "secondary" | "outlined"'}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl"'}},fullWidth:{defaultValue:{value:!1},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var ButtonStory={title:"Button",component:Button_Button},Button_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)(Button_Button,{children:"Button"})},Button_stories_Secondary=function Secondary(){return Object(jsx_runtime.jsx)(Button_Button,{type:"secondary",children:"Button"})},Button_stories_Large=function Large(){return Object(jsx_runtime.jsx)(Button_Button,{size:"lg",children:"Button"})},Button_stories_FullWidth=function FullWidth(){return Object(jsx_runtime.jsx)("div",{style:{maxWidth:400},children:Object(jsx_runtime.jsx)(Button_Button,{fullWidth:!0,children:"Button"})})};__webpack_exports__.default=ButtonStory;Button_stories_Basic.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Button>Button</Button>"}},Button_stories_Basic.parameters),Button_stories_Secondary.parameters=Object(objectSpread2.a)({storySource:{source:'() => <Button type="secondary">Button</Button>'}},Button_stories_Secondary.parameters),Button_stories_Large.parameters=Object(objectSpread2.a)({storySource:{source:'() => <Button size="lg">Button</Button>'}},Button_stories_Large.parameters),Button_stories_FullWidth.parameters=Object(objectSpread2.a)({storySource:{source:"() => (\n  <div style={{ maxWidth: 400 }}>\n    <Button fullWidth>Button</Button>\n  </div>\n)"}},Button_stories_FullWidth.parameters)},1182:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return PieChart_stories_Basic}));var objectSpread2=__webpack_require__(45),react=__webpack_require__(2),slicedToArray=__webpack_require__(174),PieChart_module=__webpack_require__(134),PieChart_module_default=__webpack_require__.n(PieChart_module),jsx_runtime=__webpack_require__(27),PieChart_PieChart=function PieChart(_ref){var progress=_ref.progress,_ref$size=_ref.size,size=void 0===_ref$size?120:_ref$size,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?2:_ref$strokeWidth,_ref$circleOneStroke=_ref.circleOneStroke,circleOneStroke=void 0===_ref$circleOneStroke?"#d3d9de":_ref$circleOneStroke,_ref$circleTwoStroke=_ref.circleTwoStroke,circleTwoStroke=void 0===_ref$circleTwoStroke?"#ffc400":_ref$circleTwoStroke,children=_ref.children,center=size/2,radius=size/2-strokeWidth/2,circumference=2*Math.PI*radius,circleRef=Object(react.useRef)(null),_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),offset=_useState2[0],setOffset=_useState2[1];return Object(react.useEffect)((function(){setOffset((100-progress)/100*circumference)}),[setOffset,circumference,progress,offset]),Object(jsx_runtime.jsxs)("div",{className:PieChart_module_default.a.root,children:[Object(jsx_runtime.jsxs)("svg",{className:PieChart_module_default.a.svg,width:size,height:size,children:[Object(jsx_runtime.jsx)("circle",{className:PieChart_module_default.a.circleBg,stroke:circleOneStroke,cx:center,cy:center,r:radius,strokeWidth:strokeWidth}),Object(jsx_runtime.jsx)("circle",{ref:circleRef,className:PieChart_module_default.a.circle,stroke:circleTwoStroke,cx:center,cy:center,r:radius,strokeWidth:strokeWidth,strokeDasharray:circumference,strokeDashoffset:offset})]}),Object(jsx_runtime.jsxs)("div",{className:PieChart_module_default.a.text,children:[Object(jsx_runtime.jsxs)("h4",{className:PieChart_module_default.a.textProgress,children:[progress,"%"]}),children&&Object(jsx_runtime.jsx)("p",{className:PieChart_module_default.a.textDescription,children:children})]})]})};try{PieChart_PieChart.displayName="PieChart",PieChart_PieChart.__docgenInfo={description:"",displayName:"PieChart",props:{progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},size:{defaultValue:{value:120},description:"",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:2},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},circleOneStroke:{defaultValue:{value:"#d3d9de"},description:"",name:"circleOneStroke",required:!1,type:{name:"string"}},circleTwoStroke:{defaultValue:{value:"#ffc400"},description:"",name:"circleTwoStroke",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PieChart/index.tsx#PieChart"]={docgenInfo:PieChart_PieChart.__docgenInfo,name:"PieChart",path:"src/components/PieChart/index.tsx#PieChart"})}catch(__react_docgen_typescript_loader_error){}var PieChartStory={title:"PieChart",component:PieChart_PieChart},PieChart_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)(PieChart_PieChart,{progress:75,children:"операторов зарег-но"})};__webpack_exports__.default=PieChartStory;PieChart_stories_Basic.parameters=Object(objectSpread2.a)({storySource:{source:"() => (\n  <PieChart progress={75}>операторов зарег-но</PieChart>\n)"}},PieChart_stories_Basic.parameters)},1183:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Select_stories_Basic}));var objectSpread2=__webpack_require__(45),react_select_browser_esm=(__webpack_require__(2),__webpack_require__(561)),Select_module=__webpack_require__(559),Select_module_default=__webpack_require__.n(Select_module),jsx_runtime=__webpack_require__(27),Select_styles={control:function control(styles,_ref){var isFocused=_ref.isFocused;return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{boxShadow:isFocused?"0 0 0 1px #ffdd00":"none",border:isFocused?"1px solid #ffdd00 !important":"1px solid #2c343c !important",borderRadius:2,height:32,paddingTop:1})},option:function option(styles,_ref2){var isSelected=_ref2.isSelected,isFocused=_ref2.isFocused;return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{fontSize:12,color:"#2c343c",backgroundColor:isSelected?"#ffdd00":isFocused?"#ffdd0050":"white",paddingTop:12,cursor:"pointer"})},input:function input(styles){return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{fontSize:12,color:"#2c343c"})},placeholder:function placeholder(styles){return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{fontSize:12,color:"#2c343c"})},singleValue:function singleValue(styles){return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{fontSize:12,color:"#2c343c"})},indicatorSeparator:function indicatorSeparator(styles){return Object(objectSpread2.a)(Object(objectSpread2.a)({},styles),{},{display:"none"})}},Select_SelectCommon=function SelectCommon(_ref3){var options=_ref3.options,onChange=_ref3.onChange;return Object(jsx_runtime.jsx)("div",{className:Select_module_default.a.root,children:Object(jsx_runtime.jsx)(react_select_browser_esm.a,{styles:Select_styles,options:options,onChange:onChange})})};try{Select_SelectCommon.displayName="SelectCommon",Select_SelectCommon.__docgenInfo={description:"",displayName:"SelectCommon",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ISelectItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: any) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/index.tsx#SelectCommon"]={docgenInfo:Select_SelectCommon.__docgenInfo,name:"SelectCommon",path:"src/components/Select/index.tsx#SelectCommon"})}catch(__react_docgen_typescript_loader_error){}var SelectStory={title:"Select",component:Select_SelectCommon},Select_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)("div",{style:{width:400},children:Object(jsx_runtime.jsx)(Select_SelectCommon,{options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]})})};__webpack_exports__.default=SelectStory;Select_stories_Basic.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <div style={{ width: 400 }}>\n    <SelectCommon\n      options={[\n        { value: "chocolate", label: "Chocolate" },\n        { value: "strawberry", label: "Strawberry" },\n        { value: "vanilla", label: "Vanilla" },\n      ]}\n    />\n  </div>\n)'}},Select_stories_Basic.parameters)},1184:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Table_stories_Basic}));var objectSpread2=__webpack_require__(45),slicedToArray=(__webpack_require__(2),__webpack_require__(174)),classnames=__webpack_require__(273),classnames_default=__webpack_require__.n(classnames),Table_module=__webpack_require__(157),Table_module_default=__webpack_require__.n(Table_module),jsx_runtime=__webpack_require__(27),Table_Table=function Table(_ref){var columns=_ref.columns,rows=_ref.rows;return console.log("###: rows",rows),Object(jsx_runtime.jsxs)("table",{className:Table_module_default.a.table,children:[Object(jsx_runtime.jsx)("thead",{className:Table_module_default.a.thead,children:Object(jsx_runtime.jsx)("tr",{children:columns.map((function(_ref2){var id=_ref2.id,headerName=_ref2.headerName;return Object(jsx_runtime.jsx)("th",{className:Table_module_default.a.th,children:headerName},id)}))})}),Object(jsx_runtime.jsx)("tbody",{children:rows.map((function(row){var _Object$values=Object.values(row),key=Object(slicedToArray.a)(_Object$values,1)[0];return Object(jsx_runtime.jsx)("tr",{className:Table_module_default.a.tr,children:Object.entries(row).map((function(td,idx){var _td=Object(slicedToArray.a)(td,2),field=_td[0],value=_td[1],_columns$filter=columns.filter((function(col){return col.field===field})),currentColumn=Object(slicedToArray.a)(_columns$filter,1)[0];return"id"===field?null:Object(jsx_runtime.jsxs)("td",{className:classnames_default()(Table_module_default.a.td,1===idx&&Table_module_default.a.tdRowName),children:[Object(jsx_runtime.jsx)("span",{children:currentColumn.headerName}),value]},field)}))},key)}))})]})};try{Table_Table.displayName="Table",Table_Table.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"HeadCellType[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"object[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/index.tsx#Table"]={docgenInfo:Table_Table.__docgenInfo,name:"Table",path:"src/components/Table/index.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var SelectStory={title:"Table",component:Table_Table},Table_stories_columns=[{id:1,field:"address",headerName:"Адрес"},{id:2,field:"total",headerName:"Зарегистрированы / Всего"},{id:3,field:"plan",headerName:"Факт / План по переводам"},{id:4,field:"active",headerName:"Активный статус"},{id:5,field:"process",headerName:"Совершают переводы"}],Table_stories_rows=[{id:1,address:"3891 Ranchview Dr. Richardson, California 62639",total:"10/20",plan:"10/20",active:"8",process:"19"},{id:2,address:"2715 Ash Dr. San Jose, South Dakota 83475",total:"10/20",plan:"10/20",active:"19",process:"13"},{id:3,address:"3891 Ranchview Dr. Richardson, California 62639",total:"10/20",plan:"10/20",active:"17",process:"12"}],Table_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)(Table_Table,{columns:Table_stories_columns,rows:Table_stories_rows})};__webpack_exports__.default=SelectStory;Table_stories_Basic.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Table columns={columns} rows={rows} />"}},Table_stories_Basic.parameters)},134:function(module,exports,__webpack_require__){module.exports={root:"PieChart_root__3OWnC",svg:"PieChart_svg__2HsPe",circle:"PieChart_circle__Ix0aG",circleBg:"PieChart_circleBg__2--t1",text:"PieChart_text__29tkp",textProgress:"PieChart_textProgress__1AN3f",textDescription:"PieChart_textDescription__2SjBf"}},157:function(module,exports,__webpack_require__){module.exports={table:"Table_table__3cVv6",thead:"Table_thead__1OMLY",th:"Table_th__2sVy3",td:"Table_td__aBNTH",tr:"Table_tr__12T8R",tdNumber:"Table_tdNumber__1VpsC",tdRowName:"Table_tdRowName__2OJND"}},209:function(module,exports,__webpack_require__){module.exports={root:"Button_root__2bb-J",primary:"Button_primary__1mTxz",secondary:"Button_secondary__2t2Od",outlined:"Button_outlined__1slbo",sm:"Button_sm__ns8od",md:"Button_md__39LYy",lg:"Button_lg__OTZ8R",fullWidth:"Button_fullWidth__1dcpM"}},559:function(module,exports,__webpack_require__){module.exports={root:"Select_root__1c3JW"}},571:function(module,exports,__webpack_require__){__webpack_require__(572),__webpack_require__(736),__webpack_require__(737),__webpack_require__(895),__webpack_require__(1114),__webpack_require__(1147),__webpack_require__(1159),__webpack_require__(1161),module.exports=__webpack_require__(1166)},645:function(module,exports){},737:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(419)}},[[571,1,2]]]);
//# sourceMappingURL=main.6fc52afd31c3c9a2638f.bundle.js.map