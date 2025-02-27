import { ref } from 'vue';


const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set() // creating a set so no duplicates can be added

  posts.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag))
  });

  tags.value = [...tagSet]

  return { tags }

}

export default useTags
