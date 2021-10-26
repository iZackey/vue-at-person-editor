<template>
    <div ref="wrap"
         :class="prefixCls"
         @compositionstart="handleCompositionStart"
         @compositionend="handleCompositionEnd"
         @input="handleInput()"
         @keydown.capture="handleKeyDown"
    >
        <div v-if="atwho"
             class="atwho-panel"
             :style="style"
        >
            <div class="atwho-inner">
                <div class="atwho-view">
                    <ul class="atwho-ul">
                        <li v-for="(item, index) in atwho.list"
                            class="atwho-li"
                            :key="index"
                            :class="isCur(index) && 'atwho-cur'"
                            :ref="isCur(index) && 'cur'"
                            :data-index="index"
                            @mouseenter="handleItemHover"
                            @click="handleItemClick"
                        >
                            <slot name="item" :item="item">
                                <span v-text="itemName(item)"></span>
                            </slot>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <span v-show="false" ref="embeddedItem">
      <slot name="embeddedItem" :current="currentItem"></slot>
    </span>
        <slot></slot>
    </div>
</template>

<style lang="scss" src="./at.scss"></style>
