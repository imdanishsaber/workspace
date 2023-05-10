<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-5">
      <h5 class="q-mt-none text-primary">Download Relay Systems Application</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        magna id eros lobortis posuere id eu orci. Sed eu magna commodo,
        sagittis eros quis, ullamcorper orci. <br />
        Aenean nec dignissim orci. Vestibulum et metus efficitur, ornare ex
        quis, mollis odio.
      </p>
      <br />
      <strong>Features</strong>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <div
        :class="$q.screen.lt.md ? 'justify-center' : ' justify-between'"
        class="flex q-gutter-md q-mt-lg"
      >
        <Button
          color="primary"
          label="DOWNLOAD"
          icon-right="saas-download-white"
          @click="onSubmit"
        />
        <Button outline color="primary" label="INSTALLATION GUIDE" />
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-7">
      <img
        class="float-right q-my-md"
        src="@/assets/relay.png"
        :style="$q.screen.lt.md ? 'max-width:100%' : 'max-width:60%'"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ConfigService from "../helper/ConfigService";

const onSubmit = async () => {
  let response = await ConfigService.download();
  downloadFile("scanner.sh", response);
};

function downloadFile(filename: any, text: any) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
</script>
