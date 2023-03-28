 const pagination = (page,limit,total,array) =>{
  let data;
  const startIndex = (page-1)*limit;
  const endIndex = startIndex+limit;
  if(startIndex === 0 &&  endIndex > total-1) data = array.slice();
  else if(endIndex > total-1) data = array.slice(startIndex);
  else data=array.slice(startIndex,endIndex);

  return data
  

};

module.exports = {pagination}
