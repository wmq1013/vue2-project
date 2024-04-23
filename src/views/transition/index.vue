<template>
  <div>
    <!-- 单个元素过渡：按钮触发，文字内容淡入淡出 -->
    <button @click="isShowElement = !isShowElement">切换元素显示</button>
    <!-- <transition
      name="fade">
      <div v-if="isShowElement" class="transition-element">
        欢迎体验Vue过渡效果！
      </div>
    </transition> -->
    <transition
      enter-active-class="animate__animated animate__shakeX"
      leave-active-class="animate__flipOutX">
      <div v-if="isShowElement" class="transition-element">
        使用animate.css
      </div>
    </transition>

    <!-- 列表项过渡：新增项从底部滑入，删除项向上滑出 -->
    <h3>动态列表</h3>
    <button @click="addItem">添加项</button>
    <ul>
      <transition-group name="list" tag="li">
        <li
          v-for="(item, index) in items"
          :key="item.id"
          @click="removeItem(index)">
          {{ item.text }}（点击删除）
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowElement: false,
      items: [
        { id: 1, text: '列表项1' },
        { id: 2, text: '列表项2' },
      ],
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: Date.now(),
        text: `新列表项${this.items.length + 1}`,
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
  },
}
</script>
<style lang="scss" scoped>
/* 单个元素淡入淡出过渡效果 */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  animation: enter 3s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  animation: leave 3s;
}

.fade-leave-to {
  opacity: 0.5;
}

/* vue中的过渡动画结合css3中的animation关键帧 */
@keyframes enter {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}
@keyframes leave {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(0);
  }
}
/* 列表项滑动过渡效果 */
.list-move {
  transition: transform 0.3s;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
.animate__animated.animate__shakeX {
  --animate-duration: 2s;
}
</style>
