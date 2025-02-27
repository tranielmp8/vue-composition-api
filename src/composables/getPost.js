import { ref } from 'vue'

export default function getPost(id) {
  const post = ref(null)
  const error = ref(null);

  const load = async () => {
    try {

      // simulate delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })

      let data = await fetch('http://localhost:3000/posts/' + id)
      if (!data.ok) {
        throw Error("That post doesn't exist")
      }

      post.value = await data.json()

    }
    catch(err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { load, post, error }
}