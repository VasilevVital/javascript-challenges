function ArithGeo(arr) {

  // if same difference between nums
  if (arr[1] - arr[0] == arr[arr.length-1] - arr[arr.length-2]){
    return "Arithmetic";
  }
  // if consecutive numbers divide into two
  else if (arr[1] / arr[0] == arr[arr.length-1] / arr[arr.length-2]){
    return "Geometric";
  }
  else{
    return -1;
  }

}
