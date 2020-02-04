<template>
  <div class="slot" :data-winner="resultItemIndex">
    <div ref="wrapper" class="slot-wrapper" :style="{ height: wrapperHeight }">
      <div ref="container">
        <template v-for="(choice, i) in availableChoices">
          <SlotMachineSlotItem
            :item="choice"
            :key="i"
            :class="{
              'slot-item-winner': resultItemIndex && resultItemIndex === i
            }"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { pxToRem, randomBetween, randomizeArray } from "@/utilities";
import { mapGetters } from "vuex";
import { TweenLite, TimelineLite, TweenMax } from "gsap";
import SlotMachineSlotItem from "@/components/slots/SlotMachineSlotItem";

export default {
  name: "SlotMachineSlot",
  components: {
    SlotMachineSlotItem
  },
  props: {
    spin: {
      type: Boolean
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      wrapperHeightRaw: 0,
      wrapperHeight: 0,
      resultItemIndex: false
    };
  },
  computed: {
    ...mapGetters({
      choices: "getChoices"
    }),
    availableChoices() {
      return randomizeArray([
        ...this.choices,
        ...this.choices,
        ...this.choices
      ]);
    }
  },
  methods: {
    setWrapperHeight() {
      const firstItem = Array.from(
        this.$refs.container ? this.$refs.container.children : []
      ).shift();

      this.wrapperHeightRaw = firstItem.offsetHeight;
      this.wrapperHeight = pxToRem(this.wrapperHeightRaw);
    },
    goBabyGo() {
      this.resultItemIndex = null;
      const resultItemIndex = randomBetween(
        0,
        this.availableChoices.length - 1
      );
      const timelineLite = new TimelineLite();

      const animStart = TweenLite.to(this.$refs.container, 0.125, {
        y: -3 * this.wrapperHeightRaw + "px",
        ease: "easeIn",
        clearProps: "y",
        delay: this.delay
      });

      const animMid = TweenMax.to(this.$refs.container, 0.125, {
        y: -3 * this.wrapperHeightRaw + "px",
        ease: "none",
        clearProps: "y",
        repeat: 20
      });

      const animFinish = TweenLite.to(this.$refs.container, 0.5, {
        y:
          resultItemIndex > 0
            ? -resultItemIndex * this.wrapperHeightRaw + "px"
            : 0, //-this.availableChoices.length * this.wrapperHeightRaw + "px",
        ease: "easeOut",
        onComplete: () => {
          this.$emit("result", this.availableChoices[resultItemIndex]);
          this.resultItemIndex = resultItemIndex;
        }
      });

      timelineLite
        .add(animStart)
        .add(animMid)
        .add(animFinish);
    }
  },
  mounted() {
    window.addEventListener("resize", () => this.setWrapperHeight());
    this.setWrapperHeight();
  },
  watch: {
    spin(value) {
      if (value) {
        this.goBabyGo();
      }
    }
  }
};
</script>
