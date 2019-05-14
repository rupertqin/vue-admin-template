import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Table from '@/views/table/index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(ElementUI)

describe('table.vue', () => {
  const wrapper = shallowMount(Table, {
    localVue,
  })
  it('click should work on span', () => {
    const wrapper = mount(Table, {
      localVue,
    })
    expect(wrapper.vm.listLoading).toBe(true);
    wrapper.find('.click-span').trigger('click');
    expect(wrapper.vm.listLoading).toBe(false);
  })
  it('click should work on element ui', () => {
    const wrapper = shallowMount(Table, {
      localVue,
    })
    expect(wrapper.vm.listLoading).toBe(true);
    wrapper.find('.click-button').trigger('click');
    expect(wrapper.vm.listLoading).toBe(false);
  })
})
