var table="";
var rows=5;
var cols=5;
for(var r=0;r<rows;r++){
    table+='<tr>';
    for (var c=0;c<cols;c++)
    {table+='<td class="white">'+'</td>'}
}

document.write('<table border=1'+table+'</table>');
