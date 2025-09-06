<script lang="ts">
  import CopyButtonGroup from '../components/CopyButtonGroup.svelte'

  function getBookTitle() {
    // <<meta name="cxenseparse:sho-product-name">
    const elm = document.querySelector("#item-area > div.inner > div.item-info-area > h1")
    return elm?.textContent
  }

  function getBookIsbn() {
    // <a id="external-site-honto">
    const elm = document.querySelector("a#external-site-honto") as HTMLAnchorElement
    const match = elm?.href.match(/%2F([0-9]+)$/)
    return match ? match[1] : undefined
  }

  const buttons = [
    { label: 'Title', getValue: getBookTitle },
    { label: 'ISBN', getValue: getBookIsbn }
  ]
</script>

<CopyButtonGroup {buttons} />
