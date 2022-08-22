<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category=Category::select('id','name','description','image')->paginate(6);
        return response($category,200 );
        // $categories=Category::query()->orderByDesc('id')->paginate(6);
        // return response($categories,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return response($request);
         $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string',
                'image' => 'required|max:5048|mimes:jpeg,jpg,png,jfif',
            ]

        );
         if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
          $category = new Category();
        if($request->hasFile('image')){
             $image = $request->file('image');
            $filename = time(). random_int(1,999) . random_int(1,999) . random_int(1,999) . '.'.$image->getClientOriginalExtension();
            
            $destinationPath = public_path('/img/category/');
            $image->move($destinationPath, $filename);
            $category->image = $filename;
        }
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
        return response($category,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
          $category = Category::where('id', $id)->get();
          return response($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        return response($request);
    $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string',
                'image' => 'required|max:5048|mimes:jpeg,jpg,png,jfif',
            ]

        );
         if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
          $category = Category::find($id);
        if($request->hasFile('image')){
             $image = $request->file('image');
            $filename = time(). random_int(1,999) . random_int(1,999) . random_int(1,999) . '.'.$image->getClientOriginalExtension();
            
            $destinationPath = public_path('/img/category/');
            $image->move($destinationPath, $filename);
            $category->image = $filename;
        }
        $category->name = $request->name;
        $category->description = $request->description;
        $category->update();
        return response($category,201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Category::where('id','=',$id)->delete();
    }
}
