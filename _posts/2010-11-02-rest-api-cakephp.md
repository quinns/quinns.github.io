---
title: Create a REST-style API with CakePHP and XML
layout: post
legacy: true
date: 2010-11-02
category: cakephp
tags: rest-api cakephp xml
---

*Update: I've got a semi-functional demo of this concept available for [download](https://github.com/quinns/REST-API).*

It's pretty easy to build an XML-based REST API with CakePHP. You just write your application as normal but make a few changes here and there to output the XML data.

A few things to keep in mind:

Any controller that outputs XML will need to use the RequestHandler component. I find it's easiest to put the component in your app_controller.php so it automatically loaded by all your controllers.
You can use the XML Component's serialize object to automatically output all your XML data without having to manually define your template item-by-item.

Read the CakePHP [documentation](https://web.archive.org/web/20111210070413/http://book.cakephp.org/view/569/serialize) on XML serialization to learn more about this topic.

## Example app_controller.php

{% highlight php %}
<?php
 class AppController extends Controller {        
       var $helpers = array('Html', 'Text', 'Cache', 'Javascript', 'Ajax');
     var $components = array('RequestHandler');    // very important!
     var $live_site = 'http://rest-api.quinnsupplee.com';
     var $app_name = 'REST API with XML and CakePHP Demo ';
       function beforeRender(){ 
          if(isset($this->params['url']['ext']) && $this->params['url']['ext'] != 'xml'){
                $this->cacheAction = "1 day";
         }
          $this->set('app_name', $this->app_name);
       }
 
       // this function over-rides Cake's default flash()to place the message
        // on the resulting redirect page even when in debugging mode
      function flash($message = null, $redirect = null){ 
                if($message != null){
              $this->Session->setFlash($message);
          }
          if($redirect != null){
             $this->redirect($redirect);
         }
      }
  }
?>
{% endhighlight %}

## Example model category.php

{% highlight php %}
<?php
class Category extends AppModel {
   var $name = 'Category';
  // we have a Status associatiation that can be used to toggle display of various pieces of data on or off
  var $belongsTo = array(
            'Status' => array('className' => 'Status',
                             'foreignKey' => 'status_id',
                                'conditions' => '',
                             'fields' => 'Status.id',
                                'order' => ''
           )
  );
 // a Category can have many Regions and vice-versa
 var $hasAndBelongsToMany = array(
          'Region' => array('className' => 'Region',
                     'joinTable' => 'regions_categories',
                        'foreignKey' => 'category_id',
                      'associationForeignKey' => 'region_id',
                     'unique' => true,
                     'conditions' => 'Region.status_id = 1',
         )
 
 );
 
}
?>
{% endhighlight %}

## Example controller categories_controller.php

{% highlight php %}
<?php
class CategoriesController extends AppController {
  var $name = 'Categories'; 
  var $uses = array('Category', 'Region', 'RegionsCategory');
  var $paginate = array('order' => 'Category.title ASC', 'conditions' => 'Category.status_id = 1', 'limit' => 50);
 
   // all functions will look for a ".xml" extension and if found, will render XML instead of HTML
  function index() {
     $this->Category->recursive = 0;
      $this->set('categories', $this->paginate()); // html (human-readable) output is paginated
      if($this->params['url']['ext'] == 'xml'){ // xml (machine-readable) output is not paginated; output everything
            $this->set('categories', $this->Category->find('all', array('conditions' => 'Category.status_id = 1')));
       }
      $this->pageTitle = 'Categories Index';
    }
 
 function view($id = null) {
        if (!$id) {
            $this->Session->setFlash(__('Invalid Category.', true));
           $this->redirect(array('action'=>'index'));
       }
      $category = $this->Category->read(null, $id);
        $this->set('category', $category);
        $this->pageTitle = 'Category Detail: '.$category['Category']['title'];
    }
}
?>
{% endhighlight %}

Here's the super-cool automatic XML rendering. A request for /regions/index.xml (or /regions/view.xml or whatever) needs only this tiny .ctp template file:

{% highlight php %}
<regions>
  <?php echo $xml->serialize($regions); ?>
</regions>
{% endhighlight %}

Yes, that's it! "serialize" will do just that... make a serialized XML object out of all the display variables.

## Sample XML output ("Sonoma County")

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8" ?>
<region>
<region id="7" title="Sonoma County" abbreviation_1="so" abbreviation_2="sonoma" created="2009-11-17 15:08:51" modified="2010-01-20 12:36:06" status_id="1" alias="sonoma">
<status id="1"/>
<city id="1" name="Annapolis" created="2009-03-23 10:47:22" modified="2009-04-05 08:30:44" region_id="7"/>
<city id="2" name="Bodega" created="2009-03-23 10:50:06" modified="2009-03-23 10:50:06" region_id="7"/>
<city id="3" name="Bodega Bay" created="2009-03-23 10:50:12" modified="2009-03-23 10:50:12" region_id="7"/>
<city id="4" name="Boyes Hot Springs" created="2009-03-23 10:50:18" modified="2009-03-23 10:50:18" region_id="7"/>
<city id="5" name="Camp Meeker" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="7" name="Cazadero" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="8" name="Cloverdale" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="9" name="Cotati" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="10" name="Duncans Mills" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="11" name="El Verano" created="2009-03-23 10:50:24" modified="2009-03-23 11:59:41" region_id="7"/>
<city id="12" name="Eldridge" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="13" name="Forestville" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="14" name="Freestone" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="15" name="Fulton" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="16" name="Geyserville" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="17" name="Glen Ellen" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="18" name="Graton" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="19" name="Gualala" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="20" name="Guerneville" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="21" name="Healdsburg" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="22" name="Jenner" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="23" name="Kenwood" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="230" name="Middletown" created="2009-11-21 22:36:17" modified="2009-11-21 22:36:17" region_id="7"/>
<city id="24" name="Monte Rio" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="25" name="Occidental" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="26" name="Penngrove" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="27" name="Petaluma" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="28" name="Rio Nido" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="29" name="Rohnert Park" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="30" name="Santa Rosa" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="31" name="Sebastopol" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="32" name="Sheridan" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="33" name="Sonoma" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="221" name="St. Helena" created="2009-02-11 08:34:02" modified="2009-02-11 08:34:02" region_id="7"/>
<city id="34" name="Stewarts Point" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="35" name="The Sea Ranch" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="36" name="Valley Ford" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="37" name="Villa Grande" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="38" name="Vineburg" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="39" name="Windsor" created="2009-03-23 10:50:24" modified="2009-03-23 10:50:24" region_id="7"/>
<city id="222" name="Yountville" created="2009-02-11 08:36:01" modified="2009-02-11 08:36:01" region_id="7"/>
<category/>
</region>
</region>
{% endhighlight %}

That's pretty much it! Of course my real app has a ton more code: Models, Controllers, Views, etc. This should get you pointed in the right direction.

