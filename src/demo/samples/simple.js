import Importabular from "../../index";

const sheet = new Importabular({
  node: document.getElementById("editor"),
  columns: [
    {label: "Contact name",},
    {label: "Phone number",},
    {label: "Email address",},
    {label: "etc 1",},
    {label: "etc2",},
    {label: "etc3",},
    {label: "削除",},
  ],
  width: "800px",
  height: "450px",
  data:[["a","b","c","d","e","f","1"],["g","h","i","j","","","1"],["","","","","","","1"],["g","h","i","j","","","1"]],
  css:`
    table tr th:nth-of-type(2) {
      background-color: yellow;
    }
    table tr th:nth-of-type(3) {
      background-color: yellow;
    }
    table tr th:nth-of-type(4) {
      background-color: blue;
    }
    table tr th:nth-of-type(5) {
      background-color: blue;
    }
    table tr th:nth-of-type(6) {
      background-color: blue;
    }
    table tr th:nth-of-type(7) {
      background-color: red;
    }
  `,
  clickChangeColorX:{
    1:"red",
    2:"red",
    3:"blue",
    4:"blue",
    5:"blue",
    target:{
      "red":{linkX:[1,2],style:{ background:"#FCBB76",color:"white"}},
      "blue":{linkX:[3,4,5],style:{ background:"#0072BC",color:"red"}}
    },
    noChgY:[1]
  },
  disEditable: [[1,2,3,4,5],[]],
  deleteRow:6
});

window.addEventListener('DOMContentLoaded', function(){

  // 10秒ごとに実行
  setInterval(() => {
    console.log(sheet.getColor());
    console.log(sheet.getData());
  }, 10000);

});