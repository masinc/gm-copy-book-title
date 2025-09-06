<script lang="ts">
  import CopyButtonGroup from '../components/CopyButtonGroup.svelte'

  function getBookTitle() {
    // <<meta name="cxenseparse:sho-product-name">
    const elm = document.querySelector("meta[name='cxenseparse:sho-product-name']")
    return elm?.content
  }

  function getBookIsbn() {
    // <meta name="cxenseparse:sho-isbn">
    const elm = document.querySelector("meta[name='cxenseparse:sho-isbn']")
    return elm?.content
  }

  const buttons = [
    { label: 'Title', getValue: getBookTitle },
    { label: 'ISBN', getValue: getBookIsbn }
  ]
</script>

<CopyButtonGroup {buttons} />
