import '../Post.css'
function Post(props) {
  const { image, food_name } = props
  return (
    <div className="post">
      <img src={image} alt="" />
      <h2>{food_name}</h2>
      <button>Add to Cart</button>
    </div>
  )
}
export default Post
