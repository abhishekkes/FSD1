function handleName(e)
{
  const val=e.target.value;
  const parent=document.getElementById("card-name");
  parent.innerText=`Name: ${val}`;
}

function handleCode(e)
{
  const val=e.target.value;
  const parent=document.getElementById("emp-code");
  parent.innerText=`Employee Code: ${val}`;
}

function handlefile(e)
{
  const val=e.target.value
  console.log(val);

}


function validateroll(e)
{
  const val=e.target.value;
  if(val>= 24000 & val<=25000)
    alert("Valid");
}

function handleForm(e)
{
e.preventDefault();
}