let arr = [
    { column_name: 'id' },
    { column_name: 'username' },
    { column_name: 'email' },
    { column_name: 'password' },
    { column_name: 'role_user' }
  ];

  delete arr[0];
  let n = [];
  for(let elem of arr){
    if(elem != undefined)
      n.push(elem.column_name);
  }

  console.log(n);

