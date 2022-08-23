<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class CategoryController extends Controller
{

    public function index()
    {
        $category = Category::select('id', 'name', 'description', 'image')->orderByDesc('id')->paginate(10);
        return response($category, 200);
        // $categories=Category::query()->orderByDesc('id')->paginate(6);
        // return response($categories,200);
    }
    public function allCat()
    {
        //  $category= DB::table('categories')->join('courses','courses.category_id',"=",'categories.id')->take(5)->get();
        // return response($category,200);
          $category = Category::select('id', 'name', 'description', 'image')->orderByDesc('id')->take(5)->get();
        return response($category, 200);
    }
    public function store(Request $request)
    {
        // return response($request);
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string',
                'image' => 'required|max:5048|mimes:jpeg,jpg,png',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $category = new Category();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/category/');
            $image->move($destinationPath, $filename);
            $category->image = $filename;
        }
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
        return response($category, 201);
    }
    public function show($id)
    {
        $category = Category::where('id', $id)->get();
        return response($category);
    }
    public function update(Request $request, $id)
    {
        //   return  response($request->file('image'));

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'description' => 'required|string',
                'image' => 'nullable|max:5048|mimes:jpeg,jpg,png',
            ]

        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $category = Category::find($id);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/category/');
            $image->move($destinationPath, $filename);
            $category->image = $filename;
        }
        $category->name = $request->name;
        $category->description = $request->description;
        $category->update();
        return response($category, 201);
    }
    public function destroy($id)
    {
        return Category::where('id', '=', $id)->delete();
    }
}
