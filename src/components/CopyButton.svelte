<script lang="ts">
  import Icon from "@iconify/svelte"
  
  export let label: string
  export let getValue: () => string | undefined
  
  let message = ""
  let messageType: "success" | "error" | "" = ""
  
  async function handleCopy() {
    const value = getValue()
    if (value) {
      try {
        await navigator.clipboard.writeText(value)
        message = "コピーしました"
        messageType = "success"
      } catch (error) {
        message = "コピーに失敗しました"
        messageType = "error"
      }
    } else {
      message = "コピーに失敗しました"
      messageType = "error"
    }
    
    setTimeout(() => {
      message = ""
      messageType = ""
    }, 1500)
  }
</script>

<div class="copy-btn-wrapper">
  <button class="copy-btn" on:click={handleCopy}>
    <span class="btn-label">{label}</span>
    <Icon icon="mdi:content-copy" class="copy-icon"/>
  </button>
  {#if message}
    <div class="message {messageType}">{message}</div>
  {/if}
</div>

<style>
  .copy-btn-wrapper {
    position: relative;
  }

  .copy-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    color: #4b5563;
    transition: all 0.15s ease;
  }

  .copy-btn:hover {
    background: #f9fafb;
    border-color: #667eea;
    color: #667eea;
  }

  .copy-btn:active {
    background: #f3f4f6;
  }

  .btn-label {
    font-size: 12px;
    font-weight: 500;
  }

  :global(.copy-icon) {
    width: 14px;
    height: 14px;
    color: #9ca3af;
    transition: color 0.15s ease;
  }
  
  .copy-btn:hover :global(.copy-icon) {
    color: #667eea;
  }
  
  .message {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    animation: fadeIn 0.2s ease;
  }
  
  .message.success {
    background: #4ade80;
    color: white;
  }
  
  .message.error {
    background: #ef4444;
    color: white;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
</style>
