<template>
  <div class="page-content">
    <h3>Q&A</h3>
    <el-divider></el-divider>
    <div class="tag-info" v-for="(item, index) in tags" :key="index">
      <a :href="item.path" target="_blank" :title="item.name">{{
        item.name
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Covid19Qa",
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      let array = [];
      let name = "";
      let path = "";

      //疫苗原理
      name = "1. 疫苗原理";
      path = "https://www.cdc.gov.tw/Category/QAPage/0mRrri9JyeXhLq393QUakw";
      array.push({ name: name, path: path });

      //接種期程與注意事項
      name = "2. 接種期程與注意事項";
      path = "https://www.cdc.gov.tw/Category/QAPage/JCyOJznV52tt35_bDBeHfA";
      array.push({ name: name, path: path });

      //接種行政實務
      name = "3. 接種行政實務";
      path = "https://www.cdc.gov.tw/Category/QAPage/QLYITNGQSveCa-Rt2jTygg";
      array.push({ name: name, path: path });

      //疫苗保護力
      name = "4. 疫苗保護力";
      path = "https://www.cdc.gov.tw/Category/QAPage/yaqfRDwXRIOEAz_FJqF6Gg";
      array.push({ name: name, path: path });

      //疫苗安全
      name = "5. 疫苗安全";
      path = "https://www.cdc.gov.tw/Category/QAPage/U6RuirseltWaY9Nd7LuWXA";
      array.push({ name: name, path: path });

      //疫苗與其他防疫/檢疫措施
      name = "6. 疫苗與其他防疫/檢疫措施";
      path = "https://www.cdc.gov.tw/Category/QAPage/xvN5xl0uGdBq6joYoe3LZw";
      array.push({ name: name, path: path });

      //學生校園接種作業
      name = "7. COVID-19疫苗學生校園接種作業問答輯";
      path = "https://www.cdc.gov.tw/Category/QAPage/YkE4mvrehRuPgrNEZxLMYw";
      array.push({ name: name, path: path });

      //孕婦及哺乳婦女
      name = "8. 孕婦及哺乳婦女";
      path = "https://www.cdc.gov.tw/Category/QAPage/aVLK2xpg8y3KYmkLK8X6iA";
      array.push({ name: name, path: path });

      //特定疾病對象接種參考
      name = "9. 特定疾病對象接種參考";
      path = "https://www.cdc.gov.tw/Category/QAPage/kNVxB1cOpDNE9jVecuCfbg";
      array.push({ name: name, path: path });

      this.tags = array;
    },
  },
};
</script>

<style>
.tag-info {
  background-color: #f4f4f5;
  color: #909399;
  width: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
}
.tag-info a {
  color: #068511;
  text-decoration: none;
}
</style>