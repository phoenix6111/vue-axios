<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue Test</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <style>
        #app {
            padding: 30px;
        }

        .input-error {
            color: #ff0000;
        }
    </style>
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
<div id="app">

    <div class="container">

        <form class="form-horizontal" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="form-group">
                <label class="control-label col-sm-2" for="name">Project Name</label>
                <div class="col-sm-10">
                    <input type="text" name="name" id="name" class="form-control"
                           placeholder="Name" v-model="form.name">
                    <span class="input-error" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="description">Project Description</label>
                <div class="col-sm-10">
                    <input type="text" name="description" id="description" class="form-control"
                           placeholder="Description" v-model="form.description">
                    <span class="input-error" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary" :class="{'disabled':form.errors.any()}">Sign in</button>
                </div>
            </div>
        </form>

    </div>

</div>

<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
