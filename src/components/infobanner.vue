<template>
  <div class="container-fluid deals">
    <div class="row">
      <div class="col-md-12">
        <p>
          <span id="deals">R44 off</span> |<span id="deals">free shipping</span>
          |<span id="deals">easy buy, easy return</span> |
          <span id="deals">Get extra 15% off</span>
        </p>
        <div class="col-md-12">
          <p>
            <span class="off">on your first order</span>
            <span class="shipping">orders R1050+</span>
            <span class="extra">Download the Laeta app</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infobanner",
};
</script>

<style>
#deals {
  font-weight: bold;
  font-size: 20px;
}
.deals {
  text-align: center;
}
.off {
  right: 200px;
  position: relative;
  top: -30px;
  font-size: 7px;
}

.shipping {
  right: 150px;
  position: relative;
  top: -28px;
  font-size: 7px;
}

.extra {
  left: 140px;
  position: relative;
  top: -28px;
  font-size: 7px;
}
</style>
