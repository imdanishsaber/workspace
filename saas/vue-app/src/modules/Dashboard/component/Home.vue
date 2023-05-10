<template>
  <div class="row q-col-gutter-x-xl">
    <div class="col-12 col-md-8">
      <q-card class="my-card q-mb-xl text-center">
        <q-card-section>
          <div class="flex justify-between">
            <h6 class="q-my-none text-black">Overview</h6>
            <q-btn-dropdown outline label="Last 30 days">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>1 day</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Last 7 days</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Last 15 days</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="flex justify-between">
            <div class="box">
              <h4>05</h4>
              <strong>
                <small>
                  Annotated Files <br />
                  Ready to Download
                </small>
              </strong>
              <div>
                <Button
                  color="primary"
                  label="Go to Downloads"
                  :to="{ name: 'Results' }"
                />
              </div>
            </div>
            <div class="box">
              <h4>03</h4>
              <strong>
                <small>
                  Files Currently
                  <br />
                  Uploading
                </small>
              </strong>
              <div>
                <Button
                  color="primary"
                  label="Go to Uploads"
                  :to="{ name: 'Upload' }"
                />
              </div>
            </div>
            <div class="box">
              <h4>02</h4>
              <strong>
                <small>
                  Cameras Connected <br />
                  to Relays System
                </small>
              </strong>
              <div>
                <Button
                  color="primary"
                  label="Relays System"
                  :to="{ name: 'Relay' }"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-mb-xl text-center">
        <q-card-section>
          <div class="flex justify-between">
            <h6 class="q-my-none text-black">Uploading</h6>
            <b>60%</b>
          </div>
          <div class="q-mt-lg">
            <div class="flex q-mb-xs justify-between">
              <b class="text-black">File-Name.mov</b>
              <small>60%</small>
            </div>
            <q-linear-progress size="10px" :value="0.5" />
            <div class="flex q-mt-xs">
              <small class="text-grey-5"
                >Video • 60 Mb of 100,00 Mb • MOV
              </small>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-pa-lg">
            <h6 class="q-mt-none q-mb-md text-black">How it works?</h6>
            <p class="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac magna id eros lobortis posuere id eu orci. Sed eu magna
              commodo, sagittis eros quis, ullamcorper orci. Aenean nec
              dignissim orci. Vestibulum et metus efficitur, ornare ex quis,
              mollis odio. <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac magna id eros lobortis posuere id eu orci. Sed eu magna
              commodo, sagittis eros quis, ullamcorper orci. Aenean nec
              dignissim orci.<br /><br />
              Vestibulum et metus efficitur, ornare ex quis, mollis odio. Aenean
              nec dignissim orci. Vestibulum et metus efficitur, ornare ex quis,
              mollis odio.<br /><br />
              Aenean nec dignissim orci. Vestibulum et metus efficitur, ornare
              ex quis, mollis odio.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
