// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


let changeLanguage = document.getElementById('changeLanguage');
changeLanguage.onchange = function(){
  if(changeLanguage!=null && chrome!=null){
    chrome.storage.sync.set({"currentLanguage": changeLanguage.value});
    console.log(changeLanguage.value);
  }else{
    console.log(changeLanguage);
  }
}