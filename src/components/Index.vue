<template>
  <div class="page-content">
    <h3>疫苗簡介</h3>
    <el-divider></el-divider>
    <div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="AstraZeneca COVID-19 疫苗" name="1">
          <div v-for="(item, index) in panelDataAZ" :key="index">
            <div class="panel">
              <div class="panel-title">{{ item.title }}</div>
              <div class="panel-body" v-html="item.content"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="BioNTech COVID-19 Vaccine" name="2">
          <div v-for="(item, index) in panelDataBNT" :key="index">
            <div class="panel">
              <div class="panel-title">{{ item.title }}</div>
              <div class="panel-body" v-html="item.content"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Moderna COVID-19 Vaccine" name="3">
          <div v-for="(item, index) in panelDataModerna" :key="index">
            <div class="panel">
              <div class="panel-title">{{ item.title }}</div>
              <div class="panel-body" v-html="item.content"></div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="高端新冠肺炎疫苗" name="4">
          <div v-for="(item, index) in panelDataMVC" :key="index">
            <div class="panel">
              <div class="panel-title">{{ item.title }}</div>
              <div class="panel-body" v-html="item.content"></div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeNames: ["1", "2", "3", "4"],
      panelDataAZ: [],
      panelDataBNT: [],
      panelDataModerna: "",
      panelDataMVC: [],
    };
  },
  mounted() {
    this.loadDataAZ();
    this.loadDataBNT();
    this.loadDataModerna();
    this.loadDataMVC();
  },
  methods: {
    loadDataAZ() {
      let title = "";
      let content = "";
      let array = [];

      //疫苗概述
      title = "疫苗概述";
      content =
        "AstraZeneca之COVID-19疫苗是含有SARS-CoV-2病毒棘蛋白(Sprotein)基因之<strong>非複製型腺病毒載體之疫苗</strong>，用於預防COVID-19。本疫苗已通過WHO、歐盟等其他先進國家及我國緊急授權使用。";
      array.push({ title: title, content: content });

      //冷儲條件
      title = "冷儲條件";
      content = "2 ~8°C 冷藏儲存。";
      array.push({ title: title, content: content });

      //接種劑量及間隔
      title = "接種劑量及間隔";
      content =
        "<ol><li>目前依據疫苗仿單之適用接種<strong>年齡為18歲以上</strong>，接種劑量為0.5 mL。</li>	<li><strong>接種劑次為2劑</strong>，目前依世界衛生組織(WHO)<strong>建議接種間隔為8至12週</strong>；依我國衛生福利部傳染病防治諮詢會預防接種組(ACIP)<strong>建議為至少8週以上</strong>。</li>	<li>接種途徑為肌肉注射。</li></ol>";
      array.push({ title: title, content: content });

      //接種注意事項
      title = "接種注意事項";
      content =
        "<ol><li>發燒或正患有急性中重度疾病者，宜待病情穩定後再接種。</li><li><strong>AstraZeneca&nbsp;COVID-19疫苗與注射後非常罕見的血栓併血小板症候群可能有關聯，接種前請與醫師討論評估相關風險後再接種。</strong></li><li><strong>過去曾發生血栓合併血小板低下症候群，或肝素引起之血小板低下症者，應避免接種。</strong></li><li><strong>本疫苗不得與其他廠牌交替使用</strong>。若不慎使用了兩劑不同COVID-19疫苗產品時，不建議再接種任何一種產品。</li><li>目前尚無資料顯示與其他疫苗同時接種對免疫原性與安全性的影響。<strong>COVID-19 疫苗與其他疫苗的接種間隔，建議間隔至少7天。</strong>如小於上述間隔，則各該疫苗亦無需再補種。</li><li>免疫功能低下者，包括接受免疫抑制劑治療的人，對疫苗的免疫反應可能減弱。(尚無免疫低下者或正在接受免疫抑制治療者的數據)</li><li>目前缺乏孕婦接種COVID-19 疫苗之臨床試驗及安全性資料，而臨床觀察性研究顯示孕婦感染SARS-CoV-2 病毒可能較一般人容易併發重症。孕婦若為COVID-19 之高職業暴露風險者或具慢性疾病而易導致重症者，可與醫師討論接種疫苗之效益與風險後，評估是否接種。</li><li>若哺乳中的婦女為建議接種之風險對象(如醫事人員)，應完成接種。目前對哺乳中的婦女接種COVID-19疫苗的安全性、疫苗對母乳或受哺嬰兒之影響尚未完全得到評估，但一般認為並不會造成相關風險。接種COVID-19疫苗後，仍可持續哺乳。</li></ol>";
      array.push({ title: title, content: content });

      //參考資料
      title = "參考資料";
      content =
        '<a href="https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw" target="_blank">衛生福利部疾病管制署-疫苗簡介</a>';
      array.push({ title: title, content: content });

      this.panelDataAZ = array;
    },
    loadDataBNT() {
      let title = "";
      let content = "";
      let array = [];

      //疫苗概述
      title = "疫苗概述";
      content =
        "BioNTech(BNT162b2) COVID-19疫苗是含有SARS-CoV-2病毒棘蛋白(S protein)之mRNA疫苗，用於預防COVID-19，本疫苗已通過WHO、歐盟等其他先進國家及我國緊急授權使用。";
      array.push({ title: title, content: content });

      //冷儲條件
      title = "冷儲條件";
      content =
        "<ol><li>-60至-90°C超低溫冷凍保存。</li><li>若轉置到2~8°C冷藏設備可保存1個月。</li></ol>";
      array.push({ title: title, content: content });

      //接種劑量及間隔
      title = "接種劑量及間隔";
      content =
        "<ol><li>目前依據疫苗仿單之適用接種年齡為12歲以上，接種劑量為0.3 mL。</li><li>接種劑次為2劑，依疫苗仿單建議接種間隔為21天以上；目前依衛生福利部傳染病防治諮詢會預防接種組(ACIP)建議接種間隔為至少28 天。</li><li>接種途徑為肌肉注射。</li></ol>";
      array.push({ title: title, content: content });

      //接種注意事項
      title = "接種注意事項";
      content =
        "<ol><li>目前依據疫苗仿單之適用接種年齡為12歲以上，接種劑量為0.3 mL。</li><li>接種劑次為2劑，依疫苗仿單建議接種間隔為21天以上；目前依衛生福利部傳染病防治諮詢會預防接種組(ACIP)建議接種間隔為至少28 天。</li>	<li>接種途徑為肌肉注射。</li></ol>";
      array.push({ title: title, content: content });

      //參考資料
      title = "參考資料";
      content =
        '<a href="https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw" target="_blank">衛生福利部疾病管制署-疫苗簡介</a>';
      array.push({ title: title, content: content });

      this.panelDataBNT = array;
    },
    loadDataModerna() {
      let title = "";
      let content = "";
      let array = [];

      //疫苗概述
      title = "疫苗概述";
      content =
        "Moderna COVID-19疫苗(Spikevax)是SARS-CoV-2病毒棘蛋白(S protein)之mRNA疫苗。本疫苗目前已通過美國、歐盟及我國等先進國家緊急授權使用。";
      array.push({ title: title, content: content });

      //冷儲條件
      title = "冷儲條件";
      content =
        "<ol>	<li>-25~-15°C冷凍保存，不得低於-50°C且不得使用乾冰冷運冷儲。</li>	<li>若轉置到2~8°C冷藏設備保存必須於30天內使用完畢。</li></ol>";
      array.push({ title: title, content: content });

      //接種劑量及間隔
      title = "接種劑量及間隔";
      content =
        "<ol><li>目前經我國食藥署核准適用年齡為12歲以上青少年及成人，接種劑量為0.5 mL。</li><li><strong>接種劑次為2劑</strong>，目前依國際指引及衛生福利部傳染病防治諮詢會預防接種組(ACIP)<strong>建議接種間隔為至少28 天</strong>。</li><li>接種途徑為肌肉注射。</li></ol>";
      array.push({ title: title, content: content });

      //接種注意事項
      title = "接種注意事項";
      content =
        "<ol>	<li>發燒或正患有急性中重度疾病者，宜待病情穩定後再接種。</li><li><strong>本疫苗不得與其他廠牌交替使用。</strong>若不慎接種了兩劑不同廠牌COVID-19 疫苗時，不建議再接種任何一種產品。</li><li>目前尚無資料顯示與其他疫苗同時接種對免疫原性與安全性的影響。<strong>COVID-19 疫苗與其他疫苗的接種間隔，建議間隔至少7天。</strong>如小於上述間隔，則各該疫苗亦無需再補種。</li><li>免疫功能低下者，包括接受免疫抑制劑治療的人，對疫苗的免疫反應可能減弱。(尚無免疫低下者或正在接受免疫抑制治療者的數據)</li>	<li>目前沒有足夠數據建議孕婦可常規接種COVID-19疫苗，惟若為高感染風險可能因罹患COVID-19導致嚴重併發症的情形，可經醫師評估是否接種疫苗。</li>	<li>若哺乳中的婦女為建議接種之風險對象(如醫事人員)，應完成接種。目前對哺乳中的婦女接種COVID-19疫苗的安全性、疫苗對母乳或受哺嬰兒之影響尚未完全得到評估，但一般認為並不會造成相關風險。接種COVID-19疫苗後，仍可持續哺乳。</li></ol>";
      array.push({ title: title, content: content });

      //參考資料
      title = "參考資料";
      content =
        '<a href="https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw" target="_blank">衛生福利部疾病管制署-疫苗簡介</a>';
      array.push({ title: title, content: content });

      this.panelDataModerna = array;
    },
    loadDataMVC() {
      let title = "";
      let content = "";
      let array = [];

      //疫苗概述
      title = "疫苗概述";
      content =
        "高端新冠肺炎疫苗(MVC COVID-19 Vaccine)是含SARS-CoV-2重組棘蛋白的疫苗之蛋白質次單元疫苗，用於預防COVID-19。本疫苗已通過我國核准專案製造。";
      array.push({ title: title, content: content });

      //冷儲條件
      title = "冷儲條件";
      content = "2 ~8°C 冷藏儲存。";
      array.push({ title: title, content: content });

      //接種劑量及間隔
      title = "接種劑量及間隔";
      content =
        "<ol>	<li>目前依據疫苗仿單之適用接種<strong>年齡為20歲以上</strong>，接種劑量為0.5 mL。</li><li><strong>接種劑次為2劑，間隔28天</strong>。</li><li>接種途徑為肌肉注射。</li></ol>";
      array.push({ title: title, content: content });

      //接種注意事項
      title = "接種注意事項";
      content =
        "<ol>	<li>發燒或正患有急性中重度疾病者，宜待病情穩定後再接種。</li>	<li><strong>本疫苗不得與其他廠牌交替使用。</strong>若不慎使用了兩劑不同COVID-19疫苗產品時，不建議再接種任何一種產品。</li>	<li>目前尚無資料顯示與其他疫苗同時接種對免疫原性與安全性的影響。<strong>COVID-19 疫苗與其他疫苗的接種間隔，建議間隔至少7天。</strong>如小於上述間隔，各該疫苗無需再補種。</li>	<li>免疫功能低下者，包括接受免疫抑制劑治療的人，對疫苗的免疫反應可能減弱。(尚無免疫低下者或正在接受免疫抑制治療者的數據)</li>	<li>目前缺乏孕婦接種COVID-19 疫苗之臨床試驗及安全性資料，而臨床觀察性研究顯示孕婦感染SARS-CoV-2 病毒可能較一般人容易併發重症。孕婦若為COVID-19 之高職業暴露風險者或具慢性疾病而易導致重症者，可與醫師討論接種疫苗之效益與風險後，評估是否接種。</li>	<li>若哺乳中的婦女為建議接種之風險對象(如醫事人員)，應完成接種。目前對哺乳中的婦女接種COVID-19疫苗的安全性、疫苗對母乳或受哺嬰兒之影響尚未完全得到評估，但一般認為並不會造成相關風險。接種COVID-19疫苗後，仍可持續哺乳。</li></ol>";
      array.push({ title: title, content: content });

      //參考資料
      title = "參考資料";
      content =
        '<a href="https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw" target="_blank">衛生福利部疾病管制署-疫苗簡介</a>';
      array.push({ title: title, content: content });

      this.panelDataMVC = array;
    },
  },
};
</script>
<style>
.panel {
  padding: 10px;
  margin-bottom: 10px;
}
.panel-title {
  font-weight: bold;
  width: 100%;
}
.panel-body {
  width: 100%;
}
</style>