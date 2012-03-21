<form action="{{#reverse}}demo.award{{/reverse}}" method="post">
  <input type="hidden" name="_csrf" value="{{ csrfToken }}">
  <fieldset>
    <div class="clearfix">
      <label for="recp">Recipient</label>
      <div class="input">
        <input id="recp" type="text" name="recipient"></input>
      </div>
    </div>

    <div class="clearfix">
      <label for="image">Image Url</label>
      <div class="input">
        <input id="image" type="text" name="image"></input>
      </div>
    </div>

    <div class="input">
      <input class="btn btn-primary" type="submit" value="Award badge"></input>
    </div>
    
  </fieldset>

