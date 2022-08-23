<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
        protected $fillable = [
        'image',
        'name',
        'description',
        'second_description',
        'user_id',
        'rate',
        'category_id',
        'price',
        'tags',
        'state',
        'time',
        'language',
    ];
}
