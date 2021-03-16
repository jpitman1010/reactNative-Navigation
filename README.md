# reactNative-Navigation

in order for Mac with M1 chip to create IOS app, must alter instructions in following way:

1. follow instructions in react-native docs to init new app
2. sudo arch -x86_64 gem install ffi   
3. cd ios && arch -x86_64 pod install && cd ../
4. open IOS folder, go into Podfile and comment out the following line:    use_flipper!()
5. cd ios
6. pod install
7. cd ../
8.  npx react-native run-ios     (ensure npx react-native start was run before running this line)
