const getStudentsByLocation = (arr, city) => {
  const res = arr.filter((ele) => ele.location === city);
  return res;
};

export default getStudentsByLocation;
