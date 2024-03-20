<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function addBookImage(Request $request)
    {
        if($request->hasFile('image')) {
            $image = $request->file('image');
            $newImgName = time().".".$image->getClientOriginalExtension();
            $image->move(public_path('uploads/book_images'),$newImgName);
            $path = "http://".request()->getHttpHost()."/uploads/book_images/".$newImgName;
            return response()->json(["status"=>"SUCCESS","path"=>$path]);
        }

        else
            {
                return response()->json(["status"=>"FAILED","path"=>null]);
            }
        



    }

}