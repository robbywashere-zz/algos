console.log(
  JSON.stringify(
    [1,2,3,4,-10,5,10,0,1,2].reduce( (p,n) =>
      [[n],...p[0][]]
      ,[[]]),
    null,
  4)
)
