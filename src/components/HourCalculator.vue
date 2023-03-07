<template>
  <div class="hello">
    <el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
    <button @click="handleCal()">Calculator</button>
    <input type="text" v-model="totalHour">
  </div>
</template>

<script lang="js">
export default {
  name: 'HourCalculator',
  data() {
    return {
      value1: [new Date(2023, 1, 1, 9, 0), new Date(2023, 1, 1, 18, 30)],
      restStart:new Date(2023, 1, 1, 12, 0),
      restEnd:new Date(2023, 1, 1, 13, 30),
      totalHour: 0,
    }
  },
  methods: {
    handleCal() {
      let workStart = this.value1[0].getTime();
      let workEnd = this.value1[1].getTime();
      let restStart = this.restStart.getTime();
      let restEnd = this.restEnd.getTime();
      if (workEnd < restStart ||workStart > restEnd){
        this.totalHour = this.timeDiff(workStart,workEnd);
      }else if(workStart > restStart && workEnd < restEnd){
        this.totalHour = 0;
      }else if(workStart < restStart ){
        this.totalHour = this.timeDiff(workStart,workEnd) - Math.min(this.timeDiff(restStart,workEnd),this.timeDiff(restStart,restEnd));
      }else{
        this.totalHour = this.timeDiff(workStart,workEnd) - this.timeDiff(workStart,restEnd);
      }
    },
    timeDiff(start, end) {
      return parseFloat((end-start)/(1000*60*60));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
