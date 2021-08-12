

const paginate = (followers) => {
  const itemPerPage = 8;
  const pages = Math.ceil(followers.length / itemPerPage);

  // create new array from whole data
  const newArray= Array.from({length:pages},(_,index)=>{
    const start = index* itemPerPage
return  followers.slice(start,start+itemPerPage)
})
  return newArray
};

export default paginate;
