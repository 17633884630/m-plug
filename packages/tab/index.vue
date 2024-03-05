<template>
    <div class="TabModule bg-white"
         :class="[{ 'tabHeight': type === 'three' }]">
        <!-- 默认Tab -->
        <div ref="tab"
             :class="[type]"
             class="common">
            <div v-for="(item, index) in data"
                 :ref="'tab' + index"
                 class="item-list"
                 :class="[selectClass(index)]"
                 :key="'TabModule' + index"
                 @click="tabClick(index, item)">{{ item.label || item }}</div>
        </div>

        <!-- 更多卡槽 -->
        <div class="slotClass"
             v-if="$slots.more">
            <slot name="more"></slot>
        </div>
    </div>
</template>

<script>
import { scrollIntoView } from './scroll.ts'
export default {
    name: 'TabModule',
    data() {
        return {
            model: 0
        }
    },
    props: {
        // 默认选中 
        value: {
            type: Number,
            default: 0
        },
        /**
         * 组件类型
         * item: 默认Tab
         * second: UI-Tabs（二级）
         * three: UI-Tabs（三级）
         * */ 
        type: {
            type: String,
            //item, second, three
            default: "item"
        },
        data: {
            type: Array,
            default: () => {
                return [
                    // { label: '标题' },
                    // { label: '标题' },
                    // { label: '标题' },
                ]
            }
        },
    },
    computed: {
        selectClass() {
            return index => {
                const isProp = Reflect.has(this.$listeners, 'input');
                return { select: index === (isProp ? this.value : this.model) }

            }
        }
    },
    methods: {
        /**
         * tab点击
         * @param {number} index 下标
         * @param {object} item 点击对象
         * */
        tabClick(index, item) {
            if (this.type === 'second') {
                const refs = this.$refs;
                scrollIntoView(index, refs.tab, refs['tab' + index][0])
            }
            this.model = index;
            this.$emit('input', index);
            this.$emit('change', { item, index: index })

            // console.log(this)
        }
    }
}
</script>

<style scoped>
@import url('./index.less');
</style>