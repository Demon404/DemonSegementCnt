# DemonSegementCnt  
  
## How to start?  

```  
npm install react-native-segementctl  
```  

## How to use?  

```
<SegementCnt componentArray={this.state.segValue} //The itemArray
             backGroundStyle={{marginTop:100,marginLeft:10}} //The segement site
             itemWidth={60} //One item width && width is itemWidth * array.length
             itemHeight={30}//
             valueSize={20}//The item text fontSize.if you don't set, the fontsize is system.
             backgroundColor='green'
             textColor='orange'
             valueIndex={2}//Set the default item .if you don't set,the index default 0.
             getIndex={(index)=>{this._getIndex(index)}}//The method of how to get index
/>

```
 