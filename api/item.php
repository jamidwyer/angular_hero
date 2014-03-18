<?php
class Item {
    public function __construct() {
        $this->title = "Title";
        $this->text = "Here is the text.";
        $this->image = "";
        $this->avatar = "";
        $this->url = "";
        echo "constructing";
    }
    public function set_item() {
    }
    public function get_item() {
        echo $this->title;
//        print_r($this);
  //      return $this;
    }
}
?>