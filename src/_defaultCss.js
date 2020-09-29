export const _defaultCss = `
html{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  visibility: hidden;
}
*{
  box-sizing: border-box;
}
body{
  padding: 0; 
  margin: 0;
}
table{
  border-spacing: 0;
  background: white;
  border: 1px solid #ddd;
  border-width: 0 1px 1px 0;
  font-size: 16px;
  font-family: sans-serif;
  border-collapse: separate;
}
td{
  padding:0;
  border: 1px solid;
  border-color: #ddd transparent transparent #ddd; 
}
td.selected.multi:not(.editing){
  background:#d7f2f9;
} 
td.focus:not(.editing){
  border-color: black;
} 
td>*{
  border:none;
  padding:10px;
  min-width:100px;
  min-height: 40px;
  font:inherit;
  line-height: 20px;
  color:inherit;
  white-space: normal;
}
td>div::selection {
    color: none;
    background: none;
}
`;