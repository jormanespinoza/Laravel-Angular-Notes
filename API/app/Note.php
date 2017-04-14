<?php

namespace API;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use SoftDeletes;

    protected $table = 'notes';
    protected $fillable = ['title', 'description'];
    protected $dates = ['deleted_at'];
}
