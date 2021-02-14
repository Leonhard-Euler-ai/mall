<template>
  <div class="wrapper">
    <ul class="content">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <span><button @click="btnClick">btn</button>
      <div @click="divClick">div</div></span>

    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)

export default {
  name: "Category",
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true,
      click:true
    })

    this.scroll.on('scroll',(pos)=>{
      //console.log(pos);
    })

    this.scroll.on('pullingUp',()=>{
      console.log('pullingup');
      this.scroll.finishPullUp()
    })
  },
  methods:{
    btnClick(){
      console.log('btnClick');
    },
    divClick(){
      console.log('divClick');
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color:  red;
  overflow-y: hidden;
}
</style>
